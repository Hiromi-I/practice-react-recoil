
import TodoItem from "./TodoItem";
import { useTodo } from "../hooks/useTodo";

const TodoList = () => {
  const { filterdTodoList } = useTodo();

  if (filterdTodoList.length > 0) {
    return (
      <ul>
        {filterdTodoList.map(todo => (
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