<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref(true);

const clickHandler = () => {
  console.log(123);
};
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    draggable
    :close-on-click-modal="false"
    :modal="false"
    class="dialog-box"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header" @click="clickHandler">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer"> </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.dialog-box {
  pointer-events: none;
}
</style>
