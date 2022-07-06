<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { UserApi } from '@/api/index';

UserApi.login();

defineProps<{ msg: string }>();

const count = ref(0);

const userStore = useUserStore();

const setUserName = (params: string) => {
  userStore.setUser({
    username: params,
  });
};
</script>

<template>
  <h1>{{ msg }}...{{ userStore.$state.user?.username }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="setUserName('123456666')">count is: {{ 'count' }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
