import { atom } from "recoil";

import { TodoType } from "../types/todo";

export const todoListState = atom<Array<TodoType>>({
  key: "TodoListState",
  default: [],
});
