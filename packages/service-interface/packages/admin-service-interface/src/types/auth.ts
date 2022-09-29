import { ResContainer, User } from '.';

export namespace Auth {
  /** 登陆请求参数 */
  export type LoginParams = {
    /** 用户名 */
    username: string;
    /** 用户密码的MD5 */
    password: string;
  };

  /** 登陆返回参数 */
  export type LoginRes = ResContainer<{
    token: string;
    userInfo: User.UserModel;
  }>;
}
