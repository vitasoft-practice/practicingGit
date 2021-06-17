import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import ObjectState from './components/ObjectState'
import "./style.scss"
import './components/todo.scss'
import Todo from './components/Todo';
import Menu from './components/Menu';
import RoutMatched from './components/RoutMatched';
import Home from './components/Home';

import { Route } from 'react-router-dom'



function App() {
  return (
    <>
      {/* <FirstComponent /> */}
      {/* <ObjectState /> */}
      {/* <Todo /> */}

      <Menu />
      <Route exact path='/' component={Home}/>
      <Route exact path='/:id' component={RoutMatched} />



    </>
  );
}

export default App;
