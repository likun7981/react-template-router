import 'whatwg-fetch';
import { stringify } from 'qs';

/**
 * @author: likun,
 * @description: 
 *  This tool class can only be used to receive and process json data, 
 *  other data please use fetch native
 */

const noop = () => {};
let globalCallback = {};
let globalConfig = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
};
const config = ({ callbacks = {}, configs = {} }) => {
  Object.keys(callbacks).forEach(key => {
    const callback = callbacks[key];
    if (typeof callback === 'function') {
      globalCallback[key] = callbacks[key];
    } else {
      throw new Error(`The callback ${key} must be a function`);
    }
  });
  Object.keys(configs).forEach(key => {
    globalConfig[key] = configs[key];
    if (key === 'headers') {
      globalConfig[key] = { ...globalConfig[key], ...configs[key] };
    }
  });
};

const requestConfig = ({ headers = {}, credentials } = {}, timeout) => {
  const {
    onStart = noop,
    onComplete = noop,
    onSuccess = noop,
    onError = noop,
    onSuccessFilter = result => result
  } = globalCallback;
  timeout = timeout || globalConfig.timeout;
  const assignHeaders = globalConfig.headers
    ? {
        ...globalConfig.headers,
        ...headers
      }
    : headers;
  const options = {
    ...globalConfig,
    headers: assignHeaders
  };
  if (credentials) {
    options.credentials = credentials;
  }
  return (urlWithMethod, params = {}) => {
    let [method, url] = urlWithMethod.indexOf(' ')
      ? urlWithMethod.split(/\s+/)
      : ['GET', urlWithMethod];

    let assignBody = globalConfig.body
      ? {
          ...globalConfig.body,
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
                if (
                  Object.prototype.toString.call(filterResult) ===
                  '[object Error]'
                ) {
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
        (result: Object) => {
          fn(null, result);
        },
        (error: Error) => {
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

export { fetch, config };
export default requestConfig;

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
