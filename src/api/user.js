import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  var aa = request({
    url: '/user/getUserInfo',
    method: 'post',
    params: { token }
  })
  return aa
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
