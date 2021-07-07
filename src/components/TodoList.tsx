import TodoItem from "./TodoItem";
import { useTodo } from "../hooks/useTodo";

const TodoList = () => {
  const { todoList } = useTodo();

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