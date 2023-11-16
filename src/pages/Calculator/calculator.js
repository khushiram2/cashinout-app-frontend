import React, { useState } from 'react';
import "./Calculator.css"
const Calculator = () => {
  const [result, setResult] = useState("")
  const [input, setInput] = useState("");
const operators=["+","-","*","/",".",]

  const handleButtonClick = (value) => {
    if(operators.includes(value)&&operators.includes(input.slice(-1)) )return;

  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
  
  };

  return (
    <div className="calculator">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button> 
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleCalculate('*')}>*</button>
        </div>
        <div className="row">
        <button onClick={handleClear}>C</button>
        <button onClick={handleClear}>note</button>
        <button onClick={handleClear}>history</button>
        <button onClick={() => handleCalculate('*')}>save</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
