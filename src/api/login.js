import request from '@/utils/request'
import { httpPost } from '@/utils/http'
import http from '@/utils/http'



// const path = '/lz/account'



const path = ''
export default {
  userLogin: {
      login: path + '/login/web', // 登录
  }
}


export function login(data) {
  return httpPost('/login/web', data, res => {return res})
}