import { useLoading } from '@/hooks';
import { routeNavigator } from '@/router';
import { useAuthStore, useUserStore } from '@/store';

export const useLogout = () => {
  const { loading, setLoading } = useLoading();

  const authStore = useAuthStore();
  const userStore = useUserStore();

  const logout = () => {
    setLoading(true);
    authStore.token = null;
    userStore.userInfo = null;
    routeNavigator.login();
    setLoading(false);
  };

  return {
    loading,
    logout,
  };
};
