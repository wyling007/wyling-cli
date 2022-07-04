import { test, expect } from 'vitest';
import { apiTest } from './index';
import { instance } from './request';

instance.interceptors.request.use((config) => {
  config.baseURL = 'https://www.baidu.com';
  return config;
});

test('first', async () => {
  const res = await apiTest();
  expect(res).toBe('');
});
