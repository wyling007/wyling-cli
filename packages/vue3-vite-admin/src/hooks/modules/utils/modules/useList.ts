import { PageParamsModel, ResContainerModel, PageResModel } from '@/api';
import { ref, watch } from 'vue';
import { useLoading } from '@/hooks';

export const useList = <T, U>(
  requestFn: (
    params: PageParamsModel<T>,
  ) => Promise<ResContainerModel<PageResModel<U>> | undefined>,
) => {
  /** 列表 */
  const list = ref<U[]>();

  /** 列表总数 */
  const total = ref(0);

  /** 请求参数 */
  const searchFrom = ref<PageParamsModel<T>>({
    pageNum: 1,
    pageSize: 10,
  } as PageParamsModel<T>);

  //获取列表请求标志
  const { loading, setLoading } = useLoading();

  /** 列表获取事件 */
  const getList = async () => {
    setLoading(true);
    const res = await requestFn(searchFrom.value);
    if (res?.status === 'success') {
      list.value = res.success.list;
      total.value = res.success.total;
    }
    setLoading(false);
  };

  //分页配置发生变化时重新请求列表
  watch(() => [searchFrom.value.pageNum, searchFrom.value.pageSize], getList);

  /** 搜索 */
  const search = () => {
    if (searchFrom.value.pageNum !== 1) {
      searchFrom.value.pageNum = 1;
    } else {
      getList();
    }
  };

  /** 重置搜索 */
  const resetSearch = () => {
    searchFrom.value = {
      pageNum: 1,
      pageSize: searchFrom.value.pageSize,
    };
  };

  getList();

  return {
    loading,
    list,
    total,
    searchFrom,
    getList,
    search,
    resetSearch,
  };
};
