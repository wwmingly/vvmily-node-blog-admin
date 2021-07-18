import request from '../../utils/request.js'

export const login = (data) => {
  return request({
    url: '/api/blog/list',
    method: 'get',
    data,
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    }
  })
}
