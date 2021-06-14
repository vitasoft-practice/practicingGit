import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import ObjectState from './components/ObjectState'
import "./style.scss"
import './components/todo.scss'
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      {/* <ObjectState /> */}
      <Todo />
  
     
    </div>
  );
}

export default App;
