import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { RootState } from './store';

export const ReduxExample = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      ReduxExample
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};
