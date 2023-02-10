import RequestApi from "@/services/request";
import config from "@/config/endpoints.json";
import type { ITodo } from "@/types/Todo";
import UserMocks from "@/mocks/user.json";

export default {
  getToDos: async () => {
    const url = `${config.baseUrl}/${config.todos}`;
    const res = await RequestApi.sendRequest(url);
    // since the user_id returned from the API is always dynamic,
    // we have to mock it to ensure that specific items are returned;
    return mockUserIdForToDos(res as ITodo[]);
  },
};

const mockUserIdForToDos = (items: ITodo[]) => {
  if (Array.isArray(items)) {
    return items.map((item, index) => {
      return index < 4 ? { ...item, user_id: UserMocks.userId } : item;
    });
  } else {
    return items;
  }
};
