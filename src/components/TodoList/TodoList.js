import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TodoItems from '../TodoItem/TodoItems';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});

function TodoList({ setEdit, deleteItem, archived, finished }) {
  const classes = useStyles();
  const todoList = useSelector((state) => state.todo.items);
  return (
    <Container className={classes.container} maxWidth='md'>
      {todoList.length <= 0 ? (
        <Typography variant='h6' color='error'>
          No Data to display
        </Typography>
      ) : (
        <TodoItems />
      )}
    </Container>
  );
}

export default TodoList;
