import { ref } from 'vue';

export const useLoading = () => {
  const loading = ref(false);

  const setLoading = (state: boolean) => {
    loading.value = state;
  };

  return {
    loading,
    setLoading,
  };
};
