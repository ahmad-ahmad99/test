import React, { useState, useEffect } from 'react';
import useTodo from '../../api/useTodo';
import { Grid } from 'semantic-ui-react';
import { Dimmer, Loader, Card, Header, Icon, Button } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import ModelUpdateAdd from '../Model/ModelUpdateAdd';
import nextId from 'react-id-generator';
import './style.css';

export default function TodoList() {
  const { useTodoList, handelUpdateTodoStatus } = useTodo();

  const { data, isLoading } = useTodoList();

  const [todoListCompleted, setTodoListCompleted] = useState([]);

  const [todoListNotCompleted, setTodoListNotCompleted] = useState([]);

  const [open, setOpen] = useState(false);

  const [openUpdateModel, setOpenUpdateModel] = useState(false);

  const [selectedTodoItem, setSelectedTodoItem] = useState(null);

  const handleSelectedTodoItem = (item) => {
    setSelectedTodoItem(item);
  };

  const handleCloseModel = () => {
    setOpen(false);
  };

  const handleOpenModel = () => {
    setOpen(true);
  };

  const handleCloseUpdateModel = () => {
    setOpenUpdateModel(false);
  };

  const handleOpenUpdateModel = () => {
    setOpenUpdateModel(true);
  };

  const handleUpdateTodoList = (checkedTodo, itemTodo) => {
    if (checkedTodo) {
      handelUpdateTodoStatus(itemTodo.id);
      setTodoListCompleted([{ id: itemTodo.id, title: itemTodo.title, completed: true }, ...todoListCompleted]);
      const todoListNotCompleteUpdated = todoListNotCompleted.filter((item) => item.id !== itemTodo.id);
      setTodoListNotCompleted(todoListNotCompleteUpdated);
    } else {
      console.log(checkedTodo);
      const todoListCompleteUpdated = todoListCompleted.filter((item) => item.id !== itemTodo.id);
      setTodoListCompleted(todoListCompleteUpdated);

      setTodoListNotCompleted([{ id: itemTodo.id, title: itemTodo.title, completed: false }, ...todoListNotCompleted]);
    }
  };

  const handleDeletedTodo = (id) => {
    const updateTodoList = todoListNotCompleted.filter((item) => item.id !== id);
    setTodoListNotCompleted(updateTodoList);
  };

  const handelAddTodo = (title) => {
    const id = nextId();
    setTodoListNotCompleted([{ id: id, title: title, completed: false }, ...todoListNotCompleted]);
  };

  const handelUpdateTodo = (title, item) => {
    const updateTodoList = [...todoListNotCompleted];
    const index = updateTodoList.findIndex((todoItem) => todoItem.id === item.id);
    updateTodoList[index].title = title;

    setTodoListNotCompleted(updateTodoList);
  };

  useEffect(() => {
    const todoItemsCompleted = data?.filter((item) => item.completed === true);
    const todoItemsNotCompleted = data?.filter((item) => item.completed !== true);
    setTodoListCompleted(todoItemsCompleted);
    setTodoListNotCompleted(todoItemsNotCompleted);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Dimmer active>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>
      ) : (
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Card className='full'>
              <div className='item-text-check-sec m-bottom'>
                <Header as='h2' className='m-right'>
                  Todo
                </Header>
                <Button animated='vertical' onClick={() => setOpen(true)}>
                  <Button.Content hidden>Add Todo</Button.Content>
                  <Button.Content visible>
                    <Icon name='pencil alternate' />
                  </Button.Content>
                </Button>
              </div>
              {todoListNotCompleted &&
                todoListNotCompleted?.map((item) => {
                  return (
                    <div key={item.id}>
                      <TodoItem
                        item={item}
                        handleUpdateTodoList={handleUpdateTodoList}
                        handleDeletedTodo={handleDeletedTodo}
                        handleSelectedTodoItem={handleSelectedTodoItem}
                        handleOpenUpdateModel={handleOpenUpdateModel}
                      />
                    </div>
                  );
                })}
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Card className='full'>
              <div className='item-text-check-sec m-bottom'>
                <Header as='h2'>Completed</Header>
              </div>
              {todoListCompleted &&
                todoListCompleted?.map((item) => {
                  return (
                    <div key={item.id}>
                      <TodoItem item={item} handleUpdateTodoList={handleUpdateTodoList} />
                    </div>
                  );
                })}
            </Card>
          </Grid.Column>
        </Grid>
      )}
      <ModelUpdateAdd open={open} onClose={handleCloseModel} onOpen={handleOpenModel} handelAddTodo={handelAddTodo} />
      <ModelUpdateAdd
        Edit
        open={openUpdateModel}
        handleCloseUpdateModel={handleCloseUpdateModel}
        onClose={handleCloseUpdateModel}
        onOpen={handleOpenUpdateModel}
        item={selectedTodoItem}
        handelUpdateTodo={handelUpdateTodo}
      />
    </>
  );
}
