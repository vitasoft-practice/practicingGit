import React from "react";
import "./scss/mysass.scss"
interface text{
    name:String
}
export const Column=({name , children}:React.PropsWithChildren<text>)=>{
    return (<div className="column-container"> 
    <div className="column-title">
    {name}
    </div>
        <br/>
        {children}
    </div>)
}