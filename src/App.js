import { useId } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <MyInput />
      <MyInput />
    </div>
  );
}

function MyInput() {
  const id = useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} type="text" />

      <label htmlFor={`${id}-age`}>나이</label>
      <input id={`${id}-age`} type="text" />
    </div>
  );
}

export default App;
