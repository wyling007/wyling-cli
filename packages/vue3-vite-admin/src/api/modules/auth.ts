import { request } from '@/api/requset';
import { ResContainerModel } from '@/api/types/common';
import { UserInfoModel } from '@/api/types/user';
import { MD5 } from 'crypto-js';

export interface AuthModel {
  /** 登陆请求参数 */
  LoginParams: {
    /** 用户名 */
    username: string;
    /** 用户密码的MD5 */
    password: string;
  };
  /** 登陆返回参数 */
  LoginRes: ResContainerModel<{
    token: string;
    userInfo: UserInfoModel;
  }>;
}

export class AuthApi {
  /** 登陆 */
  static login(data: AuthModel['LoginParams']) {
    //密码MD5加密处理
    data.password = MD5(data.password).toString();
    return request<AuthModel['LoginRes']>({
      url: '/system/auth/login',
      method: 'POST',
      data,
    });
  }
}
