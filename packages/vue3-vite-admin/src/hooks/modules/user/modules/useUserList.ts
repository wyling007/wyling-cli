import { UserApi } from '@/api';
import { useList } from '@/hooks';

export const useUserList = () => {
  //用户列表
  const { loading, list, total, searchFrom, getList, search, resetSearch } = useList(
    UserApi.getList,
  );

  return {
    loading,
    userList: list,
    total,
    searchFrom,
    getUserList: getList,
    search,
    resetSearch,
  };
};
