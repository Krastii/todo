import react, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import { TextField,Button } from '@material-ui/core';

function AddToDo(){
 const [value,setValue] = useState('')
 const dispatch = useDispatch()
 const addTask = (text) => dispatch(addTodo(text))
 function addValue(event){
    event.preventDefault()

    if(value !== ''){
        addTask(value)
        setValue('')
    }
 }

 return(
    <form onSubmit = {addValue}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
        <Button variant="contained" type='submit'>Push</Button>
    </form>
 )
}

export default AddToDo