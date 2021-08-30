import react, { Suspense, useState } from 'react';
import './App.css';
import AddToDo from './addToDo';

const HistoriDo = react.lazy(() => import('./history'))
const TodoList = react.lazy(() => import('./TodoList'))


function App() {

  return (
    <div className ='App'>
      <h2>React ToDo</h2>
      <AddToDo />
      <Suspense fallback={<div>loading ...</div>} >
        <TodoList />
        <HistoriDo />
      </Suspense>
    </div>
  );
}

export default App;
