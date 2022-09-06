import { ref } from 'vue';
import Schema, { Rules } from 'async-validator';
import { AuthApi } from '@/api';
import { router } from '@/router';
import { useLoading } from '@/hooks';
import { Message } from '@/components';
import { useAuthStore, useUserStore } from '@/store';

export const useLogin = () => {
  const { loading, setLoading } = useLoading();

  const authStore = useAuthStore();
  const userStore = useUserStore();

  /** 登陆表单 */
  const loginForm = ref<{
    username?: string;
    password?: string;
    isjizhu?: boolean;
  }>({});

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
  };

  const validator = new Schema(rules);

  const loginHandler = async () => {
    //校验输入的值是否符合规范
    const value = await validator
      .validate({
        username: loginForm.value.username,
        password: loginForm.value.password,
      })
      .then(async (value) => {
        return {
          username: value.username as string,
          password: value.password as string,
        };
      })
      .catch(() => {
        return undefined;
      });
    //符合规范则执行以下逻辑
    if (value) {
      setLoading(true);
      const loginRes = await AuthApi.login(value);
      if (loginRes?.status === 'success') {
        Message.success('登陆成功');
        authStore.token = loginRes.success.token;
        userStore.userInfo = loginRes.success.userInfo;
        router.push('/home');
      }
      setLoading(false);
    }
  };

  return {
    /** 登陆表单 */
    loginForm,
    /** 表单校验规则 */
    rules,
    /** 登陆请求处理函数 */
    loginHandler,
    /** 登陆请求状态 */
    loading,
  };
};
