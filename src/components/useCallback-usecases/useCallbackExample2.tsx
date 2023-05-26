// Хук useCallback полезен в случаях, когда вам необходимо гарантировать, 
// что функция-обратного вызова не будет пересоздана при каждом рендере компонента. 
// Это позволяет оптимизировать производительность компонента и предотвратить ненужные 
// повторные рендеры.

import React, { useState, useCallback } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
