import React, { FC, useState } from 'react';
import './App.css';

type Props = {color:string}

const App:FC<Props> = ({color}) =>{
  const [state, setState] = useState({counter: 0})

  const onIncrement =():void=> {
    setState(v=>({counter: v.counter+1}))
  }
  const onDecrement =():void=> {
    setState(v=>({counter: v.counter-1}))
  }
  return (
    <div className="App">
       <button onClick={onIncrement}>Increment</button>
       <button onClick={onDecrement}>Decrement</button>
       {state.counter}
    </div>
  );
}

export default App;
