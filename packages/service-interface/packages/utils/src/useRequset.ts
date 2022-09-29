import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/** 请求器能力初始化 */
export const useRequest = (baseConfig?: AxiosRequestConfig) => {
  const instance = axios.create(baseConfig);

  instance.interceptors.request.use((config) => {
    return config;
  });

  instance.interceptors.response.use((response) => {
    return response;
  });

  type RequestType = {
    <T>(config: AxiosRequestConfig, responseModel?: 'data'): Promise<T>;
    <T>(config: AxiosRequestConfig, responseModel: 'all'): Promise<
      AxiosResponse<T>
    >;
  };

  const request: RequestType = async (config, responseModel) => {
    const response = await instance(config);
    switch (responseModel) {
      case 'all':
        return response;
      case 'data':
        return response?.data;
      default:
        return response?.data;
    }
  };

  return {
    instance,
    request,
  };
};
