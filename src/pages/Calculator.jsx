import React from 'react';
import '../css/calculator.css';

function Calculator() {
  const [result, setresult] = React.useState('');
  const display = (key) => {
    setresult(result + key);
  };
  // const calculate = () => {
  //   setresult(eval(result));
  // };
  // const allclear = () => {
  //   setresult('');
  // };
  const clearfn = () => {
    let splitarray = result.split('');
    if (splitarray.length > 0) {
      splitarray.pop();
      setresult(splitarray.join(''));
    }
  };
  return (
    <div>
      {' '}
      <div className="calculator">
        <input type="text" value={result} disabled />
        <div>
          <button onClick={() => display('1')}>1</button>
          <button onClick={() => display('2')}>2</button>
          <button onClick={() => display('3')}>3</button>
          <button onClick={() => display('+')}>+</button>
        </div>
        <div>
          <button onClick={() => display('4')}>4</button>
          <button onClick={() => display('5')}>5</button>
          <button onClick={() => display('6')}>6</button>
          <button onClick={() => display('-')}>-</button>
        </div>
        <div>
          <button onClick={() => display('7')}>7</button>
          <button onClick={() => display('8')}>8</button>
          <button onClick={() => display('9')}>9</button>
          <button onClick={() => display('*')}>*</button>
        </div>
        <div>
          <button onClick={() => display('0')}>0</button>
          <button onClick={() => display('/')}>/</button>
          <button onClick={() => display('.')}>.</button>
          <button onClick={() => clearfn()}>C</button>
        </div>
        <div>
          <button className="double" onClick={() => setresult('')}>
            AC
          </button>
          <button className="double" onClick={() => setresult(eval(result))}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
