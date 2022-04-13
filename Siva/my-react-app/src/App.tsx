import React from 'react';
import Invoice from './invoice';
import './reactstyle.scss'
import GlobalStyle from './styles/Globalstyles';

import Datashare from './context/context';
function App(this:any, props: any ) {
  

  const data={
    cust_name: "sivakumar",
    new: [{
        id:1,
        name:"sk",
        mail: "sivask"
    },
    {
        id:2,
        name:"skkv",
        mail: "sivaskkv"
    }
    ]
}
console.log(this.context.person)
  
  return (
    <Datashare.Consumer>
      {
        () => {
          return(
            <div>
    
    <GlobalStyle/>
     Hello Hi
    <Invoice details={data}/>
    {/* <GlobalStyle/> */}
    <button>click me</button>
    <h1>this.context.person</h1>
    
    
    </div>
          )
        }
      }
    
    </Datashare.Consumer>
  );
}
App.contextType = Datashare;
export default App;
