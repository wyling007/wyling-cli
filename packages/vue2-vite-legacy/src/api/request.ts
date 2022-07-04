import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from './store/auth';

export const instance = axios.create({
  baseURL: '/api',
});

export const requestInterceptors = instance.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  }
);

export const responseInterceptors = instance.interceptors.response.use(
  (response) => {
    return response;
  }
);

function request<T, D = any>(
  config: AxiosRequestConfig<D>,
  type?: 'data'
): Promise<T>;
function request<T, D = any, P = 'data' | 'all'>(
  config: AxiosRequestConfig<D>,
  type: 'all'
): Promise<AxiosResponse<T, D>>;

async function request<T, D = any>(
  config: AxiosRequestConfig<D>,
  type: 'data' | 'all' = 'data'
) {
  const res: AxiosResponse<T, D> = await instance(config);
  switch (type) {
    case 'data':
      return res.data;
    case 'all':
      return res;
  }
}

export default request;
