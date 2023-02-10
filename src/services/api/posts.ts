import RequestApi from "@/services/request";
import config from "@/config/endpoints.json";

export default {
  getAllPosts: async () => {
    const url = `${config.baseUrl}/${config.posts}`;
    return await RequestApi.sendRequest(url);
  },
};
