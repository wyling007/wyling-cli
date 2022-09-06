<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title?: string;
  width?: string;
  loading?: boolean;
}>();

const emits = defineEmits<{
  (event: 'update:modelValue', modelValue: boolean): void;
  (event: 'handleCancel'): void;
  (event: 'handleConfirm'): void;
}>();

const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(modelValue: boolean) {
    emits('update:modelValue', modelValue);
  },
});
</script>

<template>
  <el-dialog
    custom-class="dialog-container"
    v-model="dialogVisible"
    :title="props.title"
    :width="props.width"
    :close-on-click-modal="false"
  >
    <slot />
    <template #footer>
      <slot name="footer">
        <span class="dialog-footer">
          <el-button @click="emits('handleCancel')" :disabled="loading">取消</el-button>
          <el-button type="primary" @click="emits('handleConfirm')" :loading="loading"
            >新增</el-button
          >
        </span>
      </slot>
    </template>
  </el-dialog>
</template>

<style lang="scss">
.dialog-container {
  border-radius: 12px !important;
  .el-form-item {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
