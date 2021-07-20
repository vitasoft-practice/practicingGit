import React from "react";

interface text{
    name:String
}
export const Column=({name}:text)=>{
    return (<div> Welcome to Column Component <br/>
        Hello {name}
    </div>)
}