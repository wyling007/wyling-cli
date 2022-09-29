import { watch } from 'vue';
import { reactive } from 'vue';

type UserStoreModel = {
  userInfo: number;
};

export const userStore = reactive<UserStoreModel>({
  userInfo: 100,
});

setInterval(() => {
  userStore.userInfo++;
}, 1000);

watch(
  () => userStore.userInfo,
  () => {
    console.log(123);
  },
);
