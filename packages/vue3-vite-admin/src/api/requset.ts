import { useRequest } from '@/utils/requset';

export const { instance, request } = useRequest({
  baseURL: '/api',
});
