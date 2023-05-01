//importing all components
import './App.css';
import { useState } from 'react';
import Keypad from './Components/Keypad';
//this function will handle all inputs

function App() {
//this  is for adding input
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  };
// this is for evaluate
  const handleEqual = () => {
    setInput(eval(input).toString());
  };
// this is for clearing input
  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="App">
      <div className="calculator">
        <input className="display" type="text" value={input} readOnly />
        <Keypad
          handleClear={handleClear} 
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;