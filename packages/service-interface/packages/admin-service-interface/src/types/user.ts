import { ResContainer, PageRes, PageParams } from './';

export namespace User {
  /** 用户模型 */
  export interface UserModel {
    id: number;
    username: string;
    email: string;
    phone: string;
    rolse: unknown[];
  }

  /** 用户列表请求参数类型 */
  export type getListParams = PageParams<Partial<Pick<UserModel, 'username'>>>;

  /** 用户列表返回类型 */
  export type getListRes = ResContainer<PageRes<UserModel>>;

  /** 新增用户请求参数类型 */
  export type addParams = {
    username: string;
    password: string;
    phone?: string;
    email?: string;
  };

  /** 新增用户返回类型 */
  export type addRes = ResContainer<unknown>;

  /** 删除用户请求参数类型 */
  export type deleteParams = Pick<UserModel, 'id'>;

  /** 删除用户返回类型 */
  export type deleteRes = ResContainer<unknown>;
}
