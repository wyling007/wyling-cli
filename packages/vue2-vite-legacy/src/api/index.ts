import request from './request';

export const apiTest = () => {
  return request<string>({
    url: '',
    method: 'GET',
  });
};

const useLogin = () => {};
