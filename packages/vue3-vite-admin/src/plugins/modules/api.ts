import { instance, ResContainerModel } from '@/api';
import { AxiosResponse } from 'axios';
import { Message } from '@/components';
import { useAuthStore } from '@/store';
import { useLogout } from '@/hooks';

/** 初始化api业务拦截器 */
export const initApiInterceptors = () => {
  //业务请求处理
  instance.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    if (authStore.token) {
      config.headers = {
        ...config.headers,
        authorization: authStore.token,
      };
    }
    return config;
  });
  //业务异常处理
  instance.interceptors.response.use(
    (response: AxiosResponse<ResContainerModel<unknown>> | undefined) => {
      //网络错误
      if (!response || response.data.status === 'networkError') {
        Message.error('网络错误!');
      }
      //系统异常
      if (response?.data.status === 'error') {
        Message.error(response.data.error.msg);
        switch (response.data.error.code) {
          case 500: {
            const { logout } = useLogout();
            logout();
            break;
          }
        }
      }
      return response;
    },
  );
};
