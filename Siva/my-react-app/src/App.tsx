import React from 'react';
import Invoice from './invoice';
import './reactstyle.scss'
import GlobalStyle from './styles/Globalstyles';
import Fetchdata from './fetchdata';

import AppContext from './contexts/context';




interface datainapp{
  cust_name: string;
  new: { id: Number; name: String; mail: String }[];
}

const App = () => {
  const data: datainapp={
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
  return(
    <div>
      <GlobalStyle/>
       Hello Hi
      <Invoice details={data}/>
      <GlobalStyle/>
     <button>click me</button>
     <AppContext.Provider value={ {
    lang: 'de',
    authenticated: true,
    theme: 'light'
  } }>
    <Fetchdata/>
  </AppContext.Provider>
  </div>
)}

export default App;
