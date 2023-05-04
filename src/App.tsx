import React, { FC } from 'react';
import './App.css';

type Props = {color:string}

const App:FC<Props> = ({color}) =>{
  return (
    <div className="App">
       {color}
    </div>
  );
}

export default App;
