<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="login-container">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gainsboro;
}
</style>
