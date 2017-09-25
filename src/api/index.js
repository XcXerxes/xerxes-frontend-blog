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

const _parseResponse = (response) => {
  return response.json()
}

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
  // 登录页面
  login (params) {
    return fetch(`${config.api}/frontend/user/login`, _parseParams('POST', params))
    .then(checkStatus)
    .then(_parseResponse)
    .then(data => data)
    .catch(err => err)
  },
  // 注册页面
  register (params) {
    return fetch(`${config.api}/frontend/user/regist`, _parseParams('POST', params))
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => data)
      .catch(err => err)
  },
  // 检测用户名是否重复
  checkUserName ({username}) {
    return fetch(`${config.api}/frontend/user/check`, _parseParams('POST', {username}))
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => data)
      .catch(err => err)
  },
  // 获取所有的分类列表
  getCateList () {
    return fetch(`${config.api}/frontend/cate/list`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => {
        return data
      })
      .catch(err => {
        return err
      })
  },
  // 获取文章列表信息
  getArticleList ({limit, page, categoryId}) {
    let _params = `?limit=${limit}&page=${page}`
    _params = categoryId ? `${_params}&categoryId=${categoryId}` : _params
    return fetch(`${config.api}/frontend/article/list${_params}`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => data)
      .catch(err => err)
  },
  // 文章详情
  getArticleItem ({id}) {
    return fetch(`${config.api}/frontend/article/${id}`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => data)
      .catch(err => err)
  }
}
