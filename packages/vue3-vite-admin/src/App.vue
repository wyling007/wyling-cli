<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

const a = {
  b: 1,
};
a.b;
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
