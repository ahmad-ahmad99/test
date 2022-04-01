import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

export default function ModelUpdateAdd({ onClose, onOpen, open, Edit, item, handelUpdateTodo, handelAddTodo, handleCloseUpdateModel }) {
  const [title, setTitle] = useState(item?.title ? item?.title : '');

  const handelTitle = () => {
    if (title) {
      handelAddTodo(title);
      setTitle('');
    }
  };

  useEffect(() => {
    if (item) {
      setTitle(item.title);
    }
  }, [item]);

  return (
    <Modal onClose={onClose} onOpen={onOpen} open={open}>
      <Modal.Header>{Edit ? 'Update Todo' : 'Create Todo'}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              id='form-subcomponent-shorthand-input-first-name'
              label='Title'
              placeholder='Title'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        {Edit ? (
          <Button
            onClick={() => {
              handelUpdateTodo(title, item);
              handleCloseUpdateModel();
            }}
          >
            Update
          </Button>
        ) : (
          <Button onClick={() => handelTitle()}>Add</Button>
        )}
      </Modal.Actions>
    </Modal>
  );
}
