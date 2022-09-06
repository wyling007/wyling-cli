import { defineStore } from 'pinia';
import { UserInfoModel } from '@/api';

type UserStoreModel = {
  userInfo: UserInfoModel | null;
};

export const useUserStore = defineStore('User', {
  state: (): UserStoreModel => ({
    userInfo: null,
  }),
  persist: true,
});
