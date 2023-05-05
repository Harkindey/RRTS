import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { Todo, fetchTodos } from '../actions';

type Props = {
  todos: Todo[];
  fetchTodos: () => void
}

const App:FC<Props> = ({todos, fetchTodos}) =>{
  const [state, setState] = useState({counter: 0})

  useEffect(() => {
    fetchTodos()
  }, [])
  

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

const mapStateToProps = ({todos}: StoreState) => {
  return {todos}
}

export default connect(mapStateToProps, {
  fetchTodos
})(App);
