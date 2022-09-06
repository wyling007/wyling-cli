import { defineStore } from 'pinia';

type AuthStoreModel = {
  token: string | null;
};

export const useAuthStore = defineStore('Auth', {
  state: (): AuthStoreModel => ({
    token: null,
  }),
  persist: true,
});
