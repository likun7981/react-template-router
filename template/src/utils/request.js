import { notification } from 'antd'
import qs from 'qs'

function parseJSON (response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.json()
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function request (url, options = {}) {
  const params = options.body
  if (options.method && String(options.method).toUpperCase() !== 'GET') {
    options.body = JSON.stringify(JSON.parse(JSON.stringify(params)))
  } else if (params) {
    url += `?${qs.stringify(params)}`
  }
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .then(then => {
        resolve(then)
      })
      .catch(error => {
        reject(error.message)
        notification.error({
          message: error.message,
        })
      })
  })
}

export default request
