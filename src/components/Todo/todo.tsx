// Реализовать todo с удалением 

import { ChangeEvent, useState } from 'react';

export const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todosArray, setTodosArray] = useState<string[]>([]);

  const createTodo = () => {
    setTodosArray([...todosArray, todo]);
    setTodo('');
  };

  const deleteTodo = (text: string) => {
    setTodosArray(todosArray.filter((todo) => todo !== text));
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        placeholder="add new todo"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
      />
      <button onClick={createTodo}>add new todo</button>
      <ul>
        {todosArray.map((todo) => (
          <>
            <li> {todo} </li>
            <button onClick={() => deleteTodo(todo)}>delete todo</button>
          </>
        ))}
      </ul>
    </>
  );
};
