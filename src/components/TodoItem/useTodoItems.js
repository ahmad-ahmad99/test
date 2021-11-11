import { useSelector } from 'react-redux';
import { deleteItem, editItem, archived, finished } from '../../redux/actions/todoAction';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const useTodoItems = () => {
  const todoList = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [selectedItem, setSelctedItem] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectedItem = (item) => {
    setSelctedItem(item);
  };

  // getModalStyle is not a pure function, we roll the style only on the first render

  return {
    todoList,
    open,
    handleOpen,
    handleClose,
    handleSelectedItem,
    selectedItem,

    editItem: (id, title, desc) => dispatch(editItem(id, title, desc)),
    finished: (id) => dispatch(finished(id)),
    archived: (id) => dispatch(archived(id)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};

export default useTodoItems;
