import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    historyToDos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.historyToDos.push(state.todos[index]);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeHistory(state, action) {
      state.historyToDos = state.historyToDos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo, removeHistory } = todoSlice.actions;

export default todoSlice.reducer;
