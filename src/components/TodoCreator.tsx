import { ChangeEvent, useState } from "react";
import { useTodo } from "../hooks/useTodo";

const TodoCreator = () => {
  const [title, setTitle] = useState("");
  const { createTodo } = useTodo();

  const onClickHandler = () => {
    createTodo(title);
    setTitle("");
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>作成</button>
    </div>
  )
};

export default TodoCreator;