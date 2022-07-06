import { defineStore } from 'pinia';

type UserStoreModel = {
  user?: {
    username: string;
  };
};

export const useUserStore = defineStore('user', {
  state: (): UserStoreModel => ({}),
  actions: {
    setUser(user: UserStoreModel['user']) {
      this.$state.user = user;
    },
  },
});
