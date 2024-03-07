import { useEffect, useId } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <MyInput />
    </div>
  );
}

function MyInput() {
  const id = useId();

  useEffect(() => {
    const element = document.querySelector('#btn');
    console.log(element);
  }, []);

  return (
    <div>
      <button id="btn">버튼</button>
      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} type="text" />
    </div>
  );
}

export default App;
