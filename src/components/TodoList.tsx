import { useRecoilValue } from "recoil";
import { todoListState } from "../datas/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  if (todoList.length > 0) {
    return (
      <ul>
        {todoList.map(todo => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </ul>
    )
  } else {
    return (
      <div>
        <p>TODO List is Empty...</p>
      </div>
    )
  }
};

export default TodoList;