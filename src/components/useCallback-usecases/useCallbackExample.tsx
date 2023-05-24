import { useCallback, useState } from 'react';

export const UseCallbackExample1 = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  const foreceUpdated = useCallback(() => {
    setIsUpdated((prev) => !prev);
    console.log('функция пересоздана');
  }, []);

  console.log('component is rerendered');

  return <button onClick={foreceUpdated}></button>;
};
