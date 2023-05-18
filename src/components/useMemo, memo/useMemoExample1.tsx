// Пример оптимизации с помощью memo, useMemo

import { FC, memo, useMemo, useState } from 'react';

export const MemoExample1: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log('example is rendered');

  return (
    <>
      <button onClick={() => setCount(count + 1)}> Increment Count 1 </button>
      <button onClick={() => setCount2(count2 + 1)}> Increment Count 2 </button>
      <div>Count 2 is {count2}</div>
      <div>Count 1 is {count}</div>
      <MyComponent count={count} />
    </>
  );
};

export const MyComponent = memo(({ count }: { count: number }) => {
  const expensiveResult = useMemo(() => {
    console.log('expensiveResult is rendered');

    if (count === 3) {
      return `Это 3 ✅`;
    } else {
      return `Это не 3 ❌`;
    }
  }, [count === 3]);
  console.log('mycomponent is rendered');

  return <div>{expensiveResult}</div>;
});
