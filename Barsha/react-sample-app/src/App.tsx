import React from 'react';
import "./scss/mysass.scss";
import { useSelector,shallowEqual,useDispatch } from 'react-redux';

import { Article } from "./Components/Article"
import { AddArticle } from "./Components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"

import { Card } from './Card';
import { Column } from './Column';
import Counter from './Counter';
import { AddNewItem } from './AddNewItem';
import {AppContextInterface, AppContextProvider} from "./AppContext"
import { ArticleInterface, ArticleState } from './type';

const sampleAppContext :AppContextInterface={
  name:'Using React in a typescript app',
  author:'thehappybug',
  url:'http://www.example.com' 
}

function App() {
  const articles : readonly ArticleInterface[] = useSelector(
    (state:ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch : Dispatch<any> = useDispatch()
  const saveArticle = React.useCallback(
    (article: ArticleInterface)=>dispatch(addArticle(article)),
    [dispatch]
  )
  return (
   <div className="app-container">
     <AppContextProvider value={sampleAppContext} >
     <Column name="To Do">
       <Card text="Generate app scaffold"/>
     </Column>
     <Column name="In Progress">
       <Card text="Learn TypeScript"/>
     </Column>
     <Column name="Done">
       <Card text="Component using typescript"/>
     </Column>
     </AppContextProvider>
    
     {/* <AddNewItem toggleButtonText ="+ Add another list" onAdd={console.log} /> */}

     <h1>My Articles</h1>
     <AddArticle saveArticle={saveArticle} />
     {articles.map((article: ArticleInterface)=>(
       <Article key={article.id}
       article={article}
       removeArticle={removeArticle} />
     ))}

   </div>
  );
}

export default App;
