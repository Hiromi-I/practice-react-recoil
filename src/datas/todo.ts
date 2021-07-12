import { atom, selector } from "recoil";

import { TodoType } from "../types/todo";

export const todoListState = atom<Array<TodoType>>({
  key: "TodoListState",
  default: [],
});

export const todoListFilterState = atom<string>({
  key: "TodoListFilterState",
  default: "All",
});

export const filterdTodoListState = selector<Array<TodoType>>({
  key: "FilterdTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoListFilterState);

    switch(filter) {
      case "Completed":
        return list.filter(item => item.isComplete === true);
      case "Uncompleted":
        return list.filter(item => item.isComplete === false);
      default:
        return list;
    }
  },
});