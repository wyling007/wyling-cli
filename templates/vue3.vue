<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="file-name-box">
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<style scoped>
.file-name-box {
  width: 100%;
  height: 100%;
  background-color: burlywood;
}
</style>
