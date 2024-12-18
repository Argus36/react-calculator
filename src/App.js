import React from "react";


function App() {

let store = {
  butt: [
    {val: 'C'},{val: '←'},{val: '÷'}
  ],
  buttons: [
    {val: 7},{val: 8},{val: 9},{val: '×'},{val: 4},{val: 5},{val: 6},{val: '−'},{val: 1},{val: 2},{val: 3},{val: '='}
  ]
}

const [count, setCount] = React.useState('0');

  return (
    <div className="container">
      <div className="calculator">
        <div className="output">
          <input type="text" defaultValue={count}/>
        </div>
        <div className="buttons">
          {store.butt.map(item => <button className={item.val}>{item.val}</button>)}
        </div>
        <div className="buttons_2">
          {store.buttons.map(item => <button className={item.val}>{item.val}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
