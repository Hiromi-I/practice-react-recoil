import { RecoilRoot } from "recoil";
import SelectFilterState from "./components/SelectFilterState";
import TodoList from "./components/TodoList";
import TodoCreator from "./components/TodoCreator";


const App = () => {
  return (
    <RecoilRoot>
      <SelectFilterState />
      <TodoList />
      <TodoCreator />
    </RecoilRoot>
  );
};

export default App;