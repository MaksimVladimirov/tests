import './App.css';
import {
  Todo,
  MemoExample1,
  UseMemoExample2,
  UseRefExample1,
  UseRefExample2,
  UseRefExample3,
} from './components/index';

function App() {
  return (
    <>
      {/* <UseMemoExample2 /> */}
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      {/* <Todo /> */}
      {/* <UncontrolledFormComponentSolution /> */}
    </>
  );
}

export default App;
