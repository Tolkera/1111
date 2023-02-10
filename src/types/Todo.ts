export interface ITodo {
  id: string;
  status: "completed" | "pending";
  title: string;
  user_id: number;
}
