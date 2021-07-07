import { useRecoilState } from "recoil";

import { todoListState } from "../datas/todo";
import { TodoType } from "../types/todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const createTodo = (title: string) => {
    const newTodo: TodoType = { id: todoList.length, title, isComplete: false };
    setTodoList([...todoList, newTodo]);
  };

  return {
    todoList,
    createTodo,
  };
};