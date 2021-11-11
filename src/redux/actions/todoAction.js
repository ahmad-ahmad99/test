import { TodoType } from '../constans/action-type';

export const addItem = (title, desc) => {
  return {
    type: TodoType.ADD_ITEM,
    item: { title: title, desc: desc },
  };
};

export const deleteItem = (id) => {
  return {
    type: TodoType.DELETE_ITEM,
    id: id,
  };
};

export const editItem = (id, title, desc) => {
  return {
    type: TodoType.EDIT_ITEM,

    item: { id: id, title: title, desc: desc },
  };
};

export const archived = (id) => {
  return {
    type: TodoType.ARCHIVED,
    id: id,
  };
};

export const finished = (id) => {
  return {
    type: TodoType.FINISHED,
    id: id,
  };
};
