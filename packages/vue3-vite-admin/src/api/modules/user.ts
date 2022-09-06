import { request } from '@/api/requset';
import { ResContainerModel, PageResModel, PageParamsModel } from '@/api/types/common';
import { UserInfoModel } from '@/api/types/user';

export interface UserModel {
  getListParams: PageParamsModel<{
    username?: string;
  }>;
  getListRes: ResContainerModel<PageResModel<UserInfoModel>>;
  addParams: {
    username: string;
    password: string;
    phone?: string;
    email?: string;
  };
  addRes: ResContainerModel<unknown>;
  deleteRes: ResContainerModel<unknown>;
}

export class UserApi {
  /** 获取用户列表 */
  static getList(params: UserModel['getListParams']) {
    return request<UserModel['getListRes']>({
      url: '/system/user',
      method: 'GET',
      params,
    });
  }
  /** 新增用户 */
  static add(data: UserModel['addParams']) {
    return request<UserModel['addRes']>({
      url: '/system/user',
      method: 'POST',
      data,
    });
  }
  /** 删除用户 */
  static delete(id: UserInfoModel['id']) {
    return request<UserModel['deleteRes']>({
      url: `/system/user/${id}`,
      method: 'DELETE',
    });
  }
}
