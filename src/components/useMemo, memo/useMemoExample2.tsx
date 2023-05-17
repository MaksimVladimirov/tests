import React, { memo, useMemo } from 'react';

export const UseMemoExample2 = () => {
  const [state, setState] = React.useState(0);
  const list = useMemo(() => [1, 2, 3, 4, 5, 6, 7], []);
  console.log('useMemoExample2 is rerendered');

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <MemoList list={list} />
    </>
  );
};

const MemoList = memo(({ list }: { list: number[] }) => {
  console.log('MemoList is rerendered');

  return (
    <ul>
      {list.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
});
