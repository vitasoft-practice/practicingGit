import React from 'react';
import "./scss/mysass.scss"
import { Card } from './Card';
import { Column } from './Column';
import Counter from './Counter';
import { AddNewItem } from './AddNewItem';
import {AppContextInterface, AppContextProvider} from "./AppContext"

const sampleAppContext :AppContextInterface={
  name:'Using React in a typescript app',
  author:'thehappybug',
  url:'http://www.example.com' 
}

function App() {
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
   </div>
  );
}

export default App;
