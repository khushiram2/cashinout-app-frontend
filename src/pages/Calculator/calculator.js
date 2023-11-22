import React, { useEffect, useState } from 'react';
import "./Calculator.css"
import {evaluate} from "mathjs"
import { useRef } from 'react';
import { GeneralEntry } from '../GeneralEntry/GeneralEntry';
const Calculator = () => {
  const [show, setshow] = useState(false)
  const [result, setresult] = useState("")
  const [calc, setcalc] = useState("")
const operators=["+","-","*","/",".",]
const displayRef=useRef()

  const handleButtonClick = (value) => {
    if((operators.includes(value)&& calc=== "" ) || (operators.includes(value)&& operators.includes(calc.slice(-1)))) return;
    setcalc(calc+value)
    if(!operators.includes(value)){
      setresult(evaluate(calc+value).toFixed(2).toString())
    }
  };
  useEffect(() => {
    displayRef.current.scrollTop = displayRef.current.scrollHeight;
  }, [calc]);
  const handleClear = () => {
   setcalc("")
   setresult("")
  };

  const handleCalculate = () => {
  setcalc(result)
  };

  const handleSave = () => {
    setshow(true)
  }
  const removeLast = () => {
    if(calc==="")return;
    setcalc(calc.slice(0,-1))
    
  }
  const handleClose = () => {
    setshow(false)
  }

  return (
    <div className="calculator">

     <GeneralEntry show={show} handleClose={handleClose} amount={result} />
        <div className='display' ref={displayRef} >
        {calc||0}
        &nbsp;
        {result?<span>({result})</span>:""}
      </div>
      <div className="buttons">
        <div className="row-of-buttons">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button> 
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row-of-buttons">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row-of-buttons">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row-of-buttons">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row-of-buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={removeLast}>Del</button>
        <button onClick={handleClear}>history</button>
        <button onClick={handleSave}>save</button>
        </div>
      </div>


    </div>
  );
};

export default Calculator;
