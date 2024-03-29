import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { ArticleAction, ArticleState, DispatchType } from './type';

const store :Store <ArticleState,ArticleAction> & {
  dispatch : DispatchType
} = createStore(reducer , applyMiddleware(thunk))

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

