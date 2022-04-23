import React  from "react";
// import { createContext } from 'react';

// const Datashare = React.createContext('');
// // export const DatashareProvider = Datashare.Provider

// export default Datashare;
const AppContext = React.createContext({ 
    authenticated: true,
    lang: 'en',
    theme: 'dark'
  });
  export default AppContext;