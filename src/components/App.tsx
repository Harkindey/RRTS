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

  const click = (): void=>{
    fetchTodos()
  }

  const renderList = ():JSX.Element[]=>{
    return todos.map((todo)=>(
    <div key={todo.id}>
     {todo.id}. {todo.title}
    </div>
    ))
  }

  return (
    <div className="App">
       <button onClick={click}>Fetch</button>
       {renderList()}
    </div>
  );
}

const mapStateToProps = ({todos}: StoreState) => {
  return {todos}
}

export default connect(mapStateToProps, {
  fetchTodos
})(App);
