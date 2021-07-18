import request from '../../utils/request.js'

export const blog  = (data) => {
  return request({
    url: '/api/blog/list',
    method: 'get',
    data,
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    }
  })
}
