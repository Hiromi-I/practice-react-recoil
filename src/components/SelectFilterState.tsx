import { ChangeEvent } from "react";

import { useTodo } from "../hooks/useTodo";

const SelectFilterState = () => {
  const { changeFilterState } = useTodo();
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    changeFilterState(event.target.value);
  };

  return (
    <select onChange={onChangeHandler}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
};

export default SelectFilterState;