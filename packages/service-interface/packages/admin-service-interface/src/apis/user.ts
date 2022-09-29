import { request } from '../request';
import { User } from '../types';

export class UserApi {
  /** 获取用户列表 */
  static getList(params: User.getListParams) {
    return request<User.getListRes>({
      url: '/system/user',
      method: 'GET',
      params,
    });
  }
  /** 新增用户 */
  static add(data: User.addParams) {
    return request<User.addRes>({
      url: '/system/user',
      method: 'POST',
      data,
    });
  }
  /** 删除用户 */
  static delete(id: User.deleteParams) {
    return request<User.deleteRes>({
      url: `/system/user/${id}`,
      method: 'DELETE',
    });
  }
}
