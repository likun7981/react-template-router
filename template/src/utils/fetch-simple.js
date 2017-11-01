import 'whatwg-fetch';
import { stringify } from 'qs';

/**
 * @author: likun,
 * @description: 
 *  This tool class can only be used to receive and process json data, 
 *  other data please use fetch native
 * @Usage:
 *  import request from 'fetch-simple';
 *  const requestHandle = request('GET http://www.xxx.com',{param:1}).success(()=>{}).error(()=>{})
 *  // You can cancel it 
 *  requestHandle.abort();
 *  // You want to config 
 *  const reqest = request.withOption({ timeout: 3000 })
 *  const requestHandle = reqest('GET http://www.xxx.com',{param:1}).success(()=>{}).error(()=>{})
 */

const noop = () => {};
const isEroor = e => Object.prototype.toString.call(e) === '[object Error]';
let globalCallback = {};
let globalConfigs = {};

const globalCallbackNames = [
  'onStart',
  'onComplete',
  'onSuccess',
  'onError',
  'onSuccessFilter'
];
const globalConfig = (gconfig = {}) => {
  Object.keys(gconfig).forEach(key => {
    const config = gconfig[key];
    if (globalCallbackNames.indexOf(key) > 0) {
      if (typeof config === 'function') {
        globalCallback[key] = config;
      } else {
        throw new Error(`The callback ${key} must be a function`);
      }
    } else {
      globalConfigs[key] = config;
      if (key === 'headers') {
        globalConfigs[key] = { ...globalConfigs[key], ...gconfig[key] };
      }
    }
  });
};

const createRequest = ({ headers = {}, credentials, timeout, type } = {}) => {
  const {
    onStart = noop,
    onComplete = noop,
    onSuccess = noop,
    onError = noop,
    onSuccessFilter = result => result
  } = globalCallback;
  timeout = timeout || globalConfigs.timeout;
  const assignHeaders = globalConfigs.headers
    ? {
        ...globalConfigs.headers,
        ...headers
      }
    : headers;
  const options = {
    ...globalConfigs,
    headers: assignHeaders
  };
  if (credentials) {
    options.credentials = credentials;
  }
  return (urlWithMethod, params = {}) => {
    let [method, url] = urlWithMethod.indexOf(' ')
      ? urlWithMethod.split(/\s+/)
      : ['GET', urlWithMethod];

    let assignBody = globalConfigs.body
      ? {
          ...globalConfigs.body,
          ...params
        }
      : params;
    if (method !== 'GET') {
      options.method = method;
    }
    assignBody = JSON.parse(JSON.stringify(assignBody));
    if (Object.keys(assignBody).length) {
      if (method.toUpperCase() !== 'GET') {
        options.body = JSON.stringify(assignBody);
      } else {
        url += `?${stringify(assignBody)}`;
      }
    }
    const promise = new Promise((resolve, reject) => {
      onStart();
      fetch(url, options).then(
        response => {
          if (response.ok) {
            response.json().then(
              result => {
                const filterResult = onSuccessFilter(result);
                const headers = response.headers;
                if (isEroor(filterResult)) {
                  onError(filterResult);
                  onComplete(filterResult);
                  reject(filterResult);
                } else {
                  onSuccess(filterResult);
                  onComplete(null, filterResult);
                  resolve({ result: filterResult, headers });
                }
              },
              error => {
                const e = new Error('The data is not a json');
                onError(e);
                onComplete(e);
                reject(e);
              }
            );
          } else {
            const error = new Error(response.statusText);
            onError(error);
            onComplete(error);
            reject(error);
          }
        },
        error => {
          onError(error);
          onComplete(error);
          reject(error);
        }
      );
    });
    const requestPromise = {};
    requestPromise.success = fn => {
      promise.then(({ result, headers }) => {
        if (typeof fn === 'function') {
          fn(result, headers);
        }
      }, noop);
      return requestPromise;
    };
    requestPromise.error = fn => {
      promise.then(noop, error => {
        if (typeof fn === 'function') {
          fn(error);
        }
      });
      return requestPromise;
    };
    requestPromise.complete = fn => {
      fn = typeof fn === 'function' ? fn : noop;
      promise.then(
        result => {
          fn(null, result);
        },
        error => {
          fn(error);
        }
      );
      return requestPromise;
    };
    requestPromise.abort = abortablePromise(promise).abort;
    if (timeout) {
      setTimeout(() => {
        requestPromise.abort('fetch timeout');
      }, timeout);
    }
    return requestPromise;
  };
};

export { fetch, globalConfig };

const request = createRequest();
request.withOption = createRequest;
export default request;

function abortablePromise(fetchPromise) {
  let abortFn = null;
  const abortPromise = new Promise(function(resolve, reject) {
    abortFn = function(message) {
      reject(message || 'fetch aborted');
    };
  });
  const abortablePromise = Promise.race([fetchPromise, abortPromise]);
  abortablePromise.abort = abortFn;
  return abortablePromise;
}
