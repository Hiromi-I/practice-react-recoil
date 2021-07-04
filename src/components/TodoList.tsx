import { useRecoilValue } from "recoil";
import { todoListState } from "../datas/todo";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  if (todoList.length > 0) {
    return (
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
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