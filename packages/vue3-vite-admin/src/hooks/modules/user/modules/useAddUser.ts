import { ref } from 'vue';
import { useLoading } from '@/hooks';
import { UserApi, UserModel } from '@/api';
import { Message } from '@/components';
import Schema, { Rules } from 'async-validator';

export const useAddUser = () => {
  /** 新增用户表单 */
  const addUserForm = ref<{
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
  }>({});

  /** 初始化表单 */
  const initForm = () => {
    addUserForm.value = {};
  };

  const rules: Rules = {
    username: {
      type: 'string',
      required: true,
      message: '请输入账号或邮箱',
    },
    password: {
      type: 'string',
      required: true,
      message: '请输入密码',
    },
    phone: {
      type: 'string',
      required: false,
      message: '请输入手机号',
    },
    email: {
      type: 'string',
      required: false,
      message: '请输入邮箱',
    },
  };

  const validator = new Schema(rules);

  /** 获取经过校验的值 */
  const validate = () => {
    return validator
      .validate({
        username: addUserForm.value.username,
        password: addUserForm.value.password,
        phone: addUserForm.value.phone,
        email: addUserForm.value.email,
      })
      .then((value) => {
        return {
          username: value.username,
          password: value.password,
          phone: value.phone,
          email: value.email,
        } as UserModel['addParams'];
      })
      .catch(() => {
        return undefined;
      });
  };

  const { loading, setLoading } = useLoading();

  const addUser = async () => {
    /** 成功标志 */
    let successStatus = false;
    //校验输入的值是否符合规范
    const value = await validate();
    if (value) {
      setLoading(true);
      const res = await UserApi.add(value);
      setLoading(false);
      if (res?.status === 'success') {
        Message.success('用户新增成功!');
        successStatus = true;
      }
    }

    return successStatus;
  };

  return {
    addUserForm,
    loading,
    addUser,
    initForm,
    rules,
  };
};
