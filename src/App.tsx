import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";
import TodoCreator from "./components/TodoCreator";


const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
      <TodoCreator />
    </RecoilRoot>
  );
};

export default App;