import React, { useState } from 'react';
import { Segment, Header, Checkbox } from 'semantic-ui-react';
import './style.css';
import { Dropdown } from 'semantic-ui-react';
export default function TodoItem({ item, handleUpdateTodoList, handleDeletedTodo, handleSelectedTodoItem, handleOpenUpdateModel }) {
  const { id, title, completed } = item;

  return (
    <>
      {completed === true ? (
        <Segment className='item-text-check'>
          <Checkbox
            defaultChecked={completed}
            className='right'
            onClick={(e, { checked }) => {
              handleUpdateTodoList(checked, item);
            }}
          />

          <Header as='h5' className={`${completed === true ? 'text-line-throw' : ''}`}>
            {title}
          </Header>
        </Segment>
      ) : (
        <Segment className='item-text-check-third'>
          <div className='item-text-check-sec'>
            <Checkbox
              defaultChecked={completed}
              className='right'
              onClick={(e, { checked }) => {
                handleUpdateTodoList(checked, item);
              }}
            />

            <Header as='h5' className='title-ellipse '>
              {title}
            </Header>
          </div>

          <div>
            <Dropdown icon='ellipsis vertical' className='icon drop-down-menu'>
              <Dropdown.Menu>
                <Dropdown.Divider />
                <Dropdown.Item icon='trash' text='Deleted' onClick={() => handleDeletedTodo(id)} />
                <Dropdown.Item
                  icon='pencil alternate'
                  text='Edit'
                  onClick={() => {
                    handleOpenUpdateModel();
                    handleSelectedTodoItem(item);
                  }}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Segment>
      )}
    </>
  );
}
