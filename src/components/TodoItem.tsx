import { ChangeEvent, VFC } from "react";
import { useRecoilState } from "recoil";

import { TodoType } from "../types/todo";
import { todoListState } from "../datas/todo";

type Props = {
  item: TodoType;
};

const TodoItem: VFC<Props> = (props) => {
  const item = props.item
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(todo => todo === item)

  const updateItem = (newItem: TodoType) => {
    const newList = [...todoList.slice(0, index), newItem, ...todoList.slice(index + 1)];
    setTodoList(newList);
  }
  
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newItem: TodoType = { ...item, isComplete: event.target.checked };
    updateItem(newItem);
  };

  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.isComplete} onChange={onChangeHandler} />
      {item.title}
    </li>
  )
};

export default TodoItem;