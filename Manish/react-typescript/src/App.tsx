import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import ObjectState from './components/ObjectState'
import "./style.scss"
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      {/* <ObjectState /> */}
      <TodoForm />
  
     
    </div>
  );
}

export default App;
