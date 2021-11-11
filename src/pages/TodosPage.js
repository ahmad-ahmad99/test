import React from 'react';
import Form from '../components/Form/Form';

import TodoList from '../components/TodoList/TodoList';
import Switch from '@material-ui/core/Switch';
import Weather from '../components/Weather/Weather';
function TodosPage({ toggleDark, settoggleDark }) {
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  return (
    <div>
      <Form />
      <TodoList />
      <Switch checked={toggleDark} onChange={handleModeChange} name='toggleDark' color='default' />
      <Weather />
    </div>
  );
}

export default TodosPage;
