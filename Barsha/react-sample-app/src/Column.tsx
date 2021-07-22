import React from "react";
import "./scss/mysass.scss";
import {AppContextConsumer} from './AppContext';

interface text{
    name:String
}
export const Column=({name , children}:React.PropsWithChildren<text>)=>{
    return (<div className="column-container"> 
    
    <AppContextConsumer>
        {appContext => appContext && ( <div className="column-title">
            Name: {appContext.name}
            Author: {appContext.author}
            Url: {appContext.url}
        </div>)}
    </AppContextConsumer>
    
        <br/>
        {children}
    </div>)
}