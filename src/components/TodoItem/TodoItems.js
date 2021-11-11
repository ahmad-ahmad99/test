import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DoneIcon from '@mui/icons-material/Done';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useTodoItems from './useTodoItems.js';
import EditTodo from '../EditTodo/EditTodo.js';
function TodoItems() {
  const { todoList, open, handleOpen, handleClose, handleSelectedItem, selectedItem, finished, archived, deleteItem } = useTodoItems();
  return (
    <List>
      {todoList.map((item, index) => {
        return (
          <>
            <ListItem key={index} button>
              <ListItemIcon>
                <CheckCircleIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={item.title} />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete' onClick={() => deleteItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge='end'
                  aria-label='edit'
                  onClick={() => {
                    handleOpen();
                    handleSelectedItem(item);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton edge='end' aria-label='ARC' onClick={() => archived(item.id)}>
                  <ArchiveIcon />
                </IconButton>
                <IconButton edge='end' aria-label='FIN' onClick={() => finished(item.id)}>
                  <DoneIcon />
                </IconButton>
              </ListItemSecondaryAction>
              <EditTodo open={open} handleClose={handleClose} item={selectedItem} />
            </ListItem>
            <ListItem button key={item.id}>
              <div>
                <p>
                  status:
                  {item.isArchived && item.isFinished !== true
                    ? 'Archived'
                    : item.isFinished && item.isArchived !== true
                    ? 'Finished'
                    : !item.isFinished && !item.isArchived
                    ? 'in progress'
                    : 'Finished'}
                </p>
                <p>Created At:{item.createdAt}</p>
                <p>Finished At:{item.isFinished ? item.finishedAt : 'Not Finished'}</p>
                <p>Archived At:{item.isArchived ? item.archivedAt : 'Not Archived'}</p>
              </div>
            </ListItem>
          </>
        );
      })}
    </List>
  );
}

export default TodoItems;
