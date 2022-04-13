import React from 'react';
import Invoice from './invoice';
import './reactstyle.scss'
import GlobalStyle from './styles/Globalstyles';
import Fetchdata from './fetchdata';

function App(props: any) {
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
  return (
    <div>
    
    <GlobalStyle/>
     Hello Hi
    <Invoice details={data}/>
    {/* <GlobalStyle/> */}
    <button>click me</button>
    <Fetchdata/>
    </div>
  );
}

export default App;
