import { handleApiError } from "@/services/errorHandling";

const requestApiService = {
  sendRequest: async (url: string, requestType = "GET") => {
    try {
      const data = await fetch(url, {
        method: requestType,
      });
      return await data.json();
    } catch (err: any) {
      handleApiError(err);
    }
  },
};

export default requestApiService;
