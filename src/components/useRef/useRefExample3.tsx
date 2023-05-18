// Сохранение прежних значений: useRef также может использоваться для сохранения значений между рендерами компонента,
// которые не вызывают повторный рендер при изменении.

import { FC, useEffect, useRef, useState } from 'react';

export const UseRefExample3: FC = () => {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);

  useEffect(() => {
    previousCountRef.current = count;
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p> Текущее значение: {count}</p>
      <p> Предыдущее значение: {previousCountRef.current}</p>
      <button onClick={handleIncrement}></button>
    </>
  );
};
