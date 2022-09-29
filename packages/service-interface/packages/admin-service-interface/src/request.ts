import { useRequest } from '@wyling/utils';
import type { AxiosError, AxiosResponse } from 'axios';

export const { instance, request } = useRequest({
  baseURL: '/api',
});

instance.interceptors.request.use((config) => {
  return config;
});

//返回异常处理
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      return error.response;
    } else {
      return undefined;
    }
  },
);
//业务异常处理
instance.interceptors.response.use((response: AxiosResponse | undefined) => {
  if (response?.headers['response-status-type']) {
    //成功从系统返回数据
    switch (response.headers['response-status-type']) {
      case 'success':
        response.data = {
          status: 'success',
          success: response.data,
        };
        break;
      case 'error':
        response.data = {
          status: 'error',
          error: response.data,
        };
        break;
      default:
        response.data = {
          status: response.headers['response-status-type'],
          [response.headers['response-status-type']]: response.data,
        };
        break;
    }
  } else {
    //存在错误,未从系统返回数据
    if (response) {
      response.data = {
        status: 'networkError',
        networkError: response.data,
      };
    } else {
      response = undefined;
    }
  }
  return response;
});
