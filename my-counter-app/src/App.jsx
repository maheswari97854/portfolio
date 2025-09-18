import React, { useState } from 'react';
import './App.css'; // optional, for styling

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleEqual = () => {
    try {
      // Use eval to calculate result (for simplicity). Caution: eval can be unsafe.
      const res = eval(input);
      setResult(res);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="display">
        {input || '0'}
        <div className="result">{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
