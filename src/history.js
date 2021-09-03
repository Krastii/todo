import { react, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { removeHistory } from "./store/todoSlice";
import { Stack } from "@material-ui/core";

function HistoriList() {
  const historyList = useSelector((state) => state.todos.historyToDos); //подключаем список истории дел из store
  const dispatch = useDispatch();
  const removeHistoryTask = (id) => dispatch(removeHistory(id)); // подключаем действие удаление из истории
  if (historyList.length) {
    //проверка на наличие истории
    return (
      <Stack spacing={1}>
        {historyList.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            index={index}
            remove={removeHistoryTask}
          />
        ))}
      </Stack>
    );
  } else {
    return <h4>No history</h4>;
  }
}

function HistoryBlock({ checkHistory }) {
  //в зависимости от значения выводил либо ничиге либо список с историей дел
  if (checkHistory) {
    return <HistoriList />;
  } else {
    return <div />;
  }
}

function HistoriDo() {
  //выводит кнопку для показа истории
  const [checkHistory, setCheckHistory] = useState(false); // запоминание значения для кнопки
  return (
    <div>
      <button
        onClick={() => {
          setCheckHistory(!checkHistory);
        }}
      >
        History
      </button>
      <HistoryBlock checkHistory={checkHistory} />
    </div>
  );
}

export default HistoriDo;
