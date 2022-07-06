import { request } from '@/api/requset';

export class UserApi {
  static login() {
    return request({
      url: '/system/auth/login',
      method: 'POST',
      data: {
        username: 'superAdmin',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
    });
  }
}
