import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodosState, addTodo, deleteTodo } from './todosSlice';

interface SetTodosState {
  todos: TodosState;
}

export const TodosWithRedux = () => {
  const [todo, setTodo] = useState<string>('');
  const todosArray = useSelector((state: SetTodosState) => state.todos.value);
  const dispatch = useDispatch();
  const createTodo = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleDeleteTodo = (text: string) => {
    dispatch(deleteTodo(text));
  };

  return (
    <div>
      Todos
      <input value={todo} type="text" placeholder="add todo" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={createTodo}>Create todo</button>
      <ul>
        {todosArray
          ? todosArray.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(todo)}></button>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};
