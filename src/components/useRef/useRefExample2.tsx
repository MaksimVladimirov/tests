// Получение значений формы: Используя useRef, вы можете получить значения полей формы без необходимости создавать состояние или обработчики событий.

import { FC, FormEvent, useRef } from 'react';

export const UseRefExample2: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Значение поля ввода:', inputRef.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit"> Отправить </button>
    </form>
  );
};
