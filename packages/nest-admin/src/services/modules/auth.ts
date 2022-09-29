import { User } from '@/database/entities';
import { UserService } from './user';
import Jsonwebtoken from 'jsonwebtoken';

/** 权限服务 */
export class AuthService {
  /** 登录 */
  static async login(params: Pick<User, 'username' | 'password'>) {
    // 验证码校验
    // 校验成功后, 返回用户信息及token
    const user = await UserService.getUserInfoByPassword(params);
    return {
      token: AuthServiceUtils.generateJWT(user),
      userInfo: user,
    };
  }

  /** 注册 */
  static async register(params: Pick<User, 'username' | 'password'>) {
    // 验证码校验
    // 校验成功后，创建用户
    const user = await UserService.addUser(params);
    return {
      token: AuthServiceUtils.generateJWT(user),
      userInfo: user,
    };
  }

  /** 登出 */
  static async logout() {
    return true;
  }

  /** 获取用户信息 */
  static async getUserInfo(params: Pick<User, 'id'>) {
    return await UserService.getUserInfoByID({ id: params.id }, true);
  }
}

export class AuthServiceUtils {
  /** Jwt秘钥 */
  static JWT_SECRET = 'wyling-nest-demo';

  /** 生成Jwt */
  static generateJWT(user: User) {
    const token = Jsonwebtoken.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
      this.JWT_SECRET,
      {
        expiresIn: '7d',
      },
    );
    return token;
  }

  /** 解析Jwt */
  static decodeJWT(token: string) {
    return Jsonwebtoken.verify(token, this.JWT_SECRET);
  }
}
