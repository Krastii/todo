import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [], //массив для дел
    historyToDos: [], // массив для истории
  },
  reducers: {
    addTodo(state, action) {
      // добавление дела
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      // удаление дела из массива и добавление в историю
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.historyToDos.push(state.todos[index]);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeHistory(state, action) {
      // удаление из списка истории
      state.historyToDos = state.historyToDos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo, removeHistory } = todoSlice.actions;

export default todoSlice.reducer;
