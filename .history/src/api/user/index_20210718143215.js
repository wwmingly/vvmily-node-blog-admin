import request from '../../utils/request.js'

export const login = (data) => {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
    headers: {
      'Content-type': 'application/json'
    }
  })

  // new Promise((resolve, reject) => {
  //   // resolve({ code: 200, data: { token: 'admin-token' }})

  // })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    resolve({ code: 200, data: {} })
  })
}

export const getInfo = () => {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: {
        roles: ['admin'],
        name: '张三',
        avatar: '',
        introduction: ''
      }
    })
  })
}
