import axios from 'axios';

export const getTodoById = async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).catch((err) => err);
  return res.data;
};

export const markCompleteTodo = async (id) => {
  const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed: true }).catch((err) => err);
  return res.data;
};

export const getTodoList = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').catch((err) => err);
  return res.data;
};

export const addTodo = async (title) => {
  const res = await axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
    .catch((err) => err);
  return res.data;
};

export const updateTodo = async ({ id, title, completed }) => {
  const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { title, completed }).catch((err) => err);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`https://front-end-todo-test.herokuapp.com/todos/${id}`).catch((err) => err);
  return res.data;
};
