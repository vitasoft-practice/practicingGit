import React  from "react";
// import { createContext } from 'react';

// const Datashare = React.createContext('');
// // export const DatashareProvider = Datashare.Provider

// export default Datashare;
//added create context
const AppContext = React.createContext({cust_name: "sivakumar",
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
]});
  export default AppContext;