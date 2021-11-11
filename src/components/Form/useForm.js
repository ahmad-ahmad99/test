import { useState } from 'react';
import { addItem } from '../../redux/actions/todoAction';
import { useDispatch } from 'react-redux';
const useForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [errTitle, setErrorTitle] = useState('');
  const [errDesc, setErrorDisc] = useState('');
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    if (e.target.value === '') {
      setErrorTitle('please enter text');
    } else {
      setErrorTitle('');
      setTitle(e.target.value);
    }
  };
  const handleDesc = (e) => {
    console.log(e.target.value);
    if (e.target.value === '') {
      setErrorDisc('please enter desc');
    } else {
      setErrorDisc('');
      setDesc(e.target.value);
    }
  };

  const handleClick = () => {
    if (title.length === 0 || desc.length === 0) {
      setErrorTitle('Please enter title');
      setErrorDisc('Please enter desc');
      return;
    } else {
      setErrorTitle('');
      setErrorDisc('');
      dispatch(addItem(title, desc));
      setDesc('');
      setTitle('');
    }
  };

  return {
    title,
    desc,
    errTitle,
    errDesc,
    handleTitle,
    handleDesc,
    handleClick,
  };
};

export default useForm;
