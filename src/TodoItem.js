import react from "react";
import { Paper, styled, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem({ item, index, remove }) {// компонент выводит одно дело
  const Item = styled(Paper)(({ theme }) => ({//стилизация через material-ui
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <Item className='todoItem'>
      {index + 1}.&nbsp;{item.text}
      <IconButton
        className='rm'
        size='small'
        aria-label='delete'
        onClick={() => remove(item.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Item>
  );
}

export default TodoItem;
