import request from '@/utils/request'
import { AxiosResponse } from 'axios'

const api = {
  login: '/api/User/login'
}

export interface loginParam {
  username: string,
  password: string
}

export function login(param: loginParam):Promise<AxiosResponse<IResponse<string>>> {
  return request({
      url: api.login,
      method: 'post',
      data: param
  })
}