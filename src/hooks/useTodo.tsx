import { useRecoilState } from "recoil";

import { todoListState } from "../datas/todo";
import { TodoType } from "../types/todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const _findTodo = (todo: TodoType) => todoList.findIndex(item => item.id === todo.id);
  const createTodo = (title: string) => {
    const newTodo: TodoType = { id: todoList.length, title, isComplete: false };
    setTodoList([...todoList, newTodo]);
  };
  const updateTodo = (todo: TodoType) => {
    const index = _findTodo(todo);
    const newList = [...todoList.slice(0, index), todo, ...todoList.slice(index + 1)];
    setTodoList(newList);
  };
  const deleteTodo = (todo: TodoType) => {
    const index = _findTodo(todo)
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    setTodoList(newList);
  };

  return {
    todoList,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};