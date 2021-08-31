import React from "react";
import TodoItem from "./TodoItem";
import { Stack } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./store/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const removeTask = (id) => dispatch(removeTodo(id));
  const todolist = useSelector((state) => state.todos.todos);

  return (
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