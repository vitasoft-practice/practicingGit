import React from "react";
import "./scss/mysass.scss"
interface CardProps{
    text:String
}

export const Card =({text}:CardProps) =>{
    return (<div className="card-container">{text}</div>)
}
