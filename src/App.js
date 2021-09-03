import react, { Suspense } from "react";
import "./App.css";
import AddToDo from "./addToDo"; //компонент с формой для добавления дел

const TodoList = react.lazy(() => import("./TodoList")); //подключение компонента со списком дел
const HistoriDo = react.lazy(() => import("./history")); //подключение компонента с историей дел

function App() {
  return (
    <div className='App'>
      <h2>React ToDo</h2>
      <AddToDo />
      <Suspense fallback={<div>loading ...</div>}>
        <TodoList />
        <HistoriDo />
      </Suspense>
    </div>
  );
}

export default App;
