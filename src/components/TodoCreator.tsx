import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "../datas/todo";

const TodoCreator = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const createTodo = () => {
    setTodoList([...todoList, {id: todoList.length + 1, title, isComplete: false}])
    setTitle("");
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input type="text" value={title} onChange={onChangeHandler} />
      <button onClick={createTodo}>作成</button>
    </div>
  )
};

export default TodoCreator;