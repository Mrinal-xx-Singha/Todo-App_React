import React, {useEffect, useState} from 'react';
import {Button, FormControl,Input, InputLabel} from '@mui/material';
import Todo from './Todo';
import db from './firebase';

// use state is a short 
function App() {
  // stating with an empty array
const [todos, setTodos] = useState([]);
const [input, setInput] = useState(['']);

//WHen the app loads we need to listen the database and fetch new todos as they get
//added or removed
// useEffect(()=>{},dependencies)
//call it and it runs once when the app loads 
useEffect(()=> {
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    setTodos(snapshot.docs.map(doc => doc.data().todo))
  })
},[]);



const addTodo = (event) => {
//this will fire off when we click the button
// spread operator
event.preventDefault();
console.log('i am working!!!')
setTodos([...todos, input])
setInput(''); //clearing the input after clicking add todo button
// spreading the input in todos array
}
  return (
    <div>
      <h1>Building a Todo List using Create React App</h1>

      {/* setting the value always blank */}
      {/*  onClick allows us to capture the event  */}
      <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      {/* Disable the input button if there is no input */}
      <Button disabled={!input} type="submit" color="primary" variant="contained" onClick={addTodo}>Add Todo</Button>
      {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>


      <ul>
        {/* for looping  */}
        {todos.map (todo=>(
          // made a component and imported it in App.js
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>

    </div>
      );
}

export default App;
// we use jsx to create components
// allows us to write html in reactjs