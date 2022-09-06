<script lang="ts" setup>
import { Editor } from '@/components';
import { ref } from 'vue';

const html = ref('');
</script>

<template>
  <Editor v-model="html" class="base-box editor-box" />
</template>

<style scoped lang="scss">
.editor-box {
  height: 100%;
  overflow: auto;
}
</style>
