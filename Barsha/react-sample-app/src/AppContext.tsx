import React from "react";

//2 interface for our context data
 export   interface AppContextInterface{
        name:string,
        author:string,
        url:string
    }
//1 creating a context
const ctxt = React.createContext<AppContextInterface | null>( null); //if not passed null , compiler asks for mandate default value
export const AppContextProvider =ctxt.Provider;
export const AppContextConsumer =ctxt.Consumer;