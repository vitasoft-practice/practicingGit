import React from 'react';
import "./scss/mysass.scss"
import { Card } from './Card';
import { Column } from './Column';
import Counter from './Counter';
import { AddNewItem } from './AddNewItem';
function App() {
  return (
   <div className="app-container">
     <Column name="To Do">
       <Card text="Generate app scaffold"/>
     </Column>
     <Column name="In Progress">
       <Card text="Learn TypeScript"/>
     </Column>
     <Column name="Done">
       <Card text="Component using typescript"/>
     </Column>
     <AddNewItem toggleButtonText ="+ Add another list" onAdd={console.log} />
   </div>
  );
}

export default App;
