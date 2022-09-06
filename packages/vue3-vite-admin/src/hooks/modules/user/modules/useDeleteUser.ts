import { useLoading } from '@/hooks';
import { UserApi } from '@/api';
import { ElMessageBox } from 'element-plus';

export const useDeleteUser = (params?: {
  successCallback?: () => unknown;
  cancelCallback?: () => unknown;
  closeCallback?: () => unknown;
}) => {
  const { loading, setLoading } = useLoading();

  const deleteUser = async (id: number) => {
    let successStatus = false;
    setLoading(true);
    const res = await UserApi.delete(id);
    if (res?.status === 'success') {
      successStatus = true;
    }
    setLoading(false);
    return successStatus;
  };

  const confirmDeleteUser = async (id: number) => {
    let successStatus = false;
    await ElMessageBox({
      title: '删除用户',
      message: `确定删除id为${id}的用户?`,
      showCancelButton: true,
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      beforeClose: async (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true;
          instance.confirmButtonText = 'Loading...';
          const flag = await deleteUser(id);
          if (flag) {
            successStatus = true;
            params?.successCallback && params.successCallback();
            done();
          }
          instance.confirmButtonLoading = false;
        }
        if (action === 'cancel') {
          params?.cancelCallback && params.cancelCallback();
          done();
        }
        if (action === 'close') {
          params?.closeCallback && params.closeCallback();
          done();
        }
      },
    });
    return successStatus;
  };

  return {
    loading,
    confirmDeleteUser,
  };
};
