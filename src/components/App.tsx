import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { Todo, deleteTodo, fetchTodos } from '../actions';

type Props = {
  todos: Todo[];
  fetchTodos: () => void;
  deleteTodo: typeof deleteTodo;
}

const App:FC<Props> = ({todos, fetchTodos, deleteTodo}) =>{

  const click = (): void=>{
    fetchTodos()
  }

const onTodoClick = (id: number)=> {
  deleteTodo(id)
}

  const renderList = ():JSX.Element[]=>{
    return todos.map((todo)=>(
    <div key={todo.id} onClick={()=> onTodoClick(todo.id)}>
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
  fetchTodos,
  deleteTodo
})(App);
