<script lang="ts" setup>
import { ref } from 'vue';
import { useAddUser } from '@/hooks';
import { Dialog } from '@/components';
import { ElForm } from 'element-plus';

const dialogVisible = ref(false);

/** 表单实例 */
const formRef = ref<InstanceType<typeof ElForm>>();

defineExpose({
  show: () => {
    initForm();
    dialogVisible.value = true;
    setTimeout(() => {
      formRef.value?.clearValidate();
    });
  },
});

const emits = defineEmits<{
  (event: 'successCallback'): void;
  (event: 'errorCallback'): void;
  (event: 'cancelCallback'): void;
}>();

const { loading, addUser, addUserForm, rules, initForm } = useAddUser();

/** 处理确认按钮 */
const handleConfirm = async () => {
  const successStatus = await addUser();
  if (successStatus) {
    dialogVisible.value = false;
    emits('successCallback');
  } else {
    emits('errorCallback');
  }
};

/** 处理取消按钮 */
const handleCancel = () => {
  dialogVisible.value = false;
  emits('cancelCallback');
};
</script>

<template>
  <Dialog
    v-model="dialogVisible"
    v-bind="{
      title: '新增用户',
      width: '320px',
      loading: loading,
      onHandleCancel: handleCancel,
      onHandleConfirm: handleConfirm,
    }"
  >
    <el-form class="form" ref="formRef" :model="addUserForm" :rules="rules" :label-width="80">
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="addUserForm.username"
          class="input"
          placeholder="请输入用户名"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="addUserForm.password"
          class="input"
          placeholder="请输入密码"
          type="password"
          clearable
        />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="addUserForm.phone" class="input" placeholder="请输入手机号" clearable />
      </el-form-item>
      <el-form-item label="邮件" prop="email">
        <el-input v-model="addUserForm.email" class="input" placeholder="请输入邮件" clearable />
      </el-form-item>
    </el-form>
  </Dialog>
</template>

<style lang="scss" scoped>
.dialog-box {
  border-radius: 12px;
}
</style>
