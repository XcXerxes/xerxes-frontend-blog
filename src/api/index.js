import config from '@/config'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const _parseResponse = (response) => response.json()

// 解析参数

const _parseParams = (method, params) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (method === 'POST') {
    return {
      headers,
      method,
      body: JSON.stringify(params)
    }
  }
  return {
    headers,
    method: method || 'GET'
  }
}

export default {
  getCateList () {
    return fetch(`${config}/frontend/cate/list`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => data)
      .catch(err => err)
  }
}
