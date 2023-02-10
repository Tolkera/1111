import { ref } from "vue";
export const useFetch = <T>(service: () => Promise<any>, initial: T) => {
  const data = ref(initial);
  const loading = ref(true);
  const error = ref("");

  const getData = async () => {
    try {
      data.value = await service();
    } catch (err) {
      error.value = "We got an error fetching the posts";
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
