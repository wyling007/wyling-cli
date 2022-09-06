import { router } from '..';

export class routeNavigator {
  /** 跳转至登录页 */
  static login() {
    router.push({
      path: '/login',
    });
  }
  /** 跳转至首页 */
  static home() {
    router.push({
      path: '/',
    });
  }
}
