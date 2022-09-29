import { request } from '../request';
import { Auth } from '../types';
import { MD5 } from 'crypto-js';

export class AuthApi {
  /** 登陆 */
  static login(data: Auth.LoginParams) {
    //密码MD5加密处理
    data.password = MD5(data.password).toString();
    return request<Auth.LoginRes>({
      url: '/system/auth/login',
      method: 'POST',
      data,
    });
  }
}
