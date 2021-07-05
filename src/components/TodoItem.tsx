import { VFC } from "react";
import { useRecoilState } from "recoil";

import { TodoType } from "../types/todo";
import { todoListState } from "../datas/todo";

type Props = {
  item: TodoType;
};

const TodoItem: VFC<Props> = (props) => {
  const { id, title, isComplete } = props.item;
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(todo => todo === props.item)
  
  const onChange = () => {
    const newList = [
      ...todoList.slice(0, index),
      {...props.item, isComplete: !isComplete},
      ...todoList.slice(index + 1)
    ];
    setTodoList(newList);
  };

  return (
    <li key={id}>
      <input type="checkbox" checked={isComplete} onChange={onChange} />
      {title}
    </li>
  )
};

export default TodoItem;