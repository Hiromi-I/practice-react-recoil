import { ChangeEvent, VFC } from "react";

import { TodoType } from "../types/todo";
import { useTodo } from "../hooks/useTodo";

type Props = {
  item: TodoType;
};

const TodoItem: VFC<Props> = (props) => {
  const item = props.item
  const { updateTodo, deleteTodo } = useTodo();
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...item, isComplete: event.target.checked });
  };
  const onClickHandler = () => {
    deleteTodo(item);
  };

  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.isComplete} onChange={onChangeHandler} />
      {item.title}
      <button onClick={onClickHandler}>削除</button>
    </li>
  )
};

export default TodoItem;