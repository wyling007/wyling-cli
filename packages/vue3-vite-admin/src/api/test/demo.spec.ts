import { test, expect, beforeAll } from 'vitest';
import { AuthApi, instance } from '@/api';
import { UserApi } from '../modules/user';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

declare module 'axios' {
  interface AxiosRequestConfig {
    jar?: CookieJar;
  }
}

beforeAll(() => {
  instance.defaults.baseURL = 'http://localhost:3009';
  instance.defaults.jar = new CookieJar();
  wrapper(instance);
});

test('登陆测试', async () => {
  const res = await AuthApi.login({
    username: 'superAdmin',
    password: '123456',
  });

  expect(res?.status).toEqual('success');

  //业务请求处理
  instance.interceptors.request.use((config) => {
    if (res?.status === 'success') {
      config.headers = {
        ...config.headers,
        authorization: res.success.token,
      };
    }
    return config;
  });
});

test('查询用户列表', async () => {
  const res = await UserApi.getList({
    pageNum: 1,
    pageSize: 10,
  });

  expect(res?.status).toEqual('success');
});
