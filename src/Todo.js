// resembles a todo
// components
//props are properties allows us to differentiate

import { Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material'
import React from 'react';
import './Todo.css';



function Todo(props) {
  return (
    // Material Ui Snipets
    <List className='todo_list'>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.text} />
      </ListItem>
       {/* <li>{props.todo}</li> */}
    </List>
  )
}

export default Todo
