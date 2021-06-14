import React, { FC, useState } from 'react';
import './App.scss';
import Input from "./Components/Input";
import Iprops from './Interfaces';

const App: FC = () => {
  const [val, setVal] = useState<string>();
  const [text, setText] = useState<string>();
  const input: Iprops = {
    placeholder: "Test",
    onstate: setVal
  }
  const print = () =>{
    setText(val);
  }
  return (
    <div className="App">
       <h1>Hi, Hello</h1>
       <form>
           <Input input={input} />
           <button type="button" onClick={print}>Print</button>
           <p>{text}</p>
       </form>
       
    </div>
  );
}

export default App;
