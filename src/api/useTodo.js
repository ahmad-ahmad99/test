import { useQuery, useMutation } from 'react-query';
import { getTodoList, markCompleteTodo, deleteTodo, updateTodo, addTodo } from './todoList';
export default function useTodo() {
  const deleteTodoItem = useMutation((id) => deleteTodo(id));
  const updateTodoTile = useMutation((id, title) => updateTodo(id, title));
  const addTodoItem = useMutation((title) => addTodo(title));
  const markCompleteTodoItem = useMutation((id) => markCompleteTodo(id));

  const useTodoList = () => useQuery('todoList', getTodoList);

  const handelDeleteTodo = (id) => {
    deleteTodoItem.mutate(id);
  };

  const handelUpdateTodo = (id, title, completed) => {
    updateTodoTile.mutate({ id, title, completed });
  };

  const handelAddTodo = (title) => {
    addTodoItem.mutate({ title });
  };

  const handelUpdateTodoStatus = (id) => {
    markCompleteTodoItem.mutate(id);
  };

  return {
    useTodoList,

    handelAddTodo,

    handelDeleteTodo,

    handelUpdateTodo,

    handelUpdateTodoStatus,
  };
}
