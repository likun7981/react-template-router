import { createRequest } from '@likun7981/easy-fetch'
import { message } from 'antd'
import getToken from './token'

// json fetch;
export default createRequest({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Authentication-Token': getToken(),
  },
  onError: error => {
    if (error.isTimeout) {
      return message.error('request timeout', 2)
    }
    console.log('onError', error.message)
  },
  successFilter: response => {
    return new Promise((resolve, reject) => {
      response.json().then(result => {
        // You can do something for response..
        resolve(result)
      })
    })
  },
})

export { createRequest }
