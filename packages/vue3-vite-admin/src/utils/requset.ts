import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const useRequest = (baseConfig?: AxiosRequestConfig) => {
  const instance = axios.create(baseConfig);

  instance.interceptors.request.use((config) => {
    return config;
  });

  instance.interceptors.response.use((response) => {
    return response;
  });

  type RequestType = {
    <T>(config: AxiosRequestConfig, responseModel?: 'data'): Promise<T | undefined>;
    <T>(config: AxiosRequestConfig, responseModel: 'all'): Promise<AxiosResponse<T> | undefined>;
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
