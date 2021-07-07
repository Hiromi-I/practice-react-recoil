import { ChangeEvent, VFC } from "react";

import { TodoType } from "../types/todo";
import { useTodo } from "../hooks/useTodo";

type Props = {
  item: TodoType;
};

const TodoItem: VFC<Props> = (props) => {
  const item = props.item
  const { updateTodo } = useTodo();
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...item, isComplete: event.target.checked });
  };

  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.isComplete} onChange={onChangeHandler} />
      {item.title}
    </li>
  )
};

export default TodoItem;