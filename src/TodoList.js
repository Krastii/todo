import React from "react";
import TodoItem from "./TodoItem";
import { Stack } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./store/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const removeTask = (id) => dispatch(removeTodo(id)); // удаление дела
  const todolist = useSelector((state) => state.todos.todos); // подключаем список из store

  return (
    //выводит список дел
    <div className='TodoList'>
      <Stack spacing={1}>
        {todolist.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              remove={removeTask}
            />
          );
        })}
      </Stack>
    </div>
  );
}

export default TodoList;
