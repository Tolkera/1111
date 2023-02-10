import { ref } from "vue";
export const useFetch = <T>(service: () => Promise<any>, initial: T) => {
  const data = ref(initial);
  const loading = ref(true);
  const error = ref<null | unknown>(null);

  const getData = async () => {
    try {
      data.value = await service();
    } catch (err: unknown) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    getData,
    data,
    loading,
    error,
  };
};
