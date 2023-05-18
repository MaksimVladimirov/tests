// Управление фокусом элемента: Вы можете использовать useRef для установки фокуса 
// на определенный элемент при загрузке компонента или при определенных событиях.
import { useRef, useEffect, FC } from 'react';

export const UseRefExample1: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    console.log(inputRef.current);
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current?.focus()}>Фокус на инпут</button>
    </>
  );
};
