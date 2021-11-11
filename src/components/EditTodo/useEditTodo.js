import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem } from '../../redux/actions/todoAction';
function useEditTodo(item) {
  const dispatch = useDispatch();

  const [newtitle, setNewTitle] = useState(item.title);
  const [newdesc, setNewDesc] = useState(item.desc);

  const handelNewTitle = (e) => {
    if (e.target.value !== '') {
      setNewTitle(e.target.value);
    }
  };

  const handelNewDesc = (e) => {
    if (e.target.value !== '') {
      setNewDesc(e.target.value);
    }
  };

  const onUpdate = () => {
    console.log(item);

    if (newtitle === '' || newdesc === '') {
      return;
    } else {
      console.log(newtitle);
      dispatch(editItem(item.id, newtitle, newdesc));
    }
  };
  return {
    handelNewTitle,
    handelNewDesc,
    onUpdate,
    title: item.title,
    desc: item.desc,
  };
}

export default useEditTodo;
