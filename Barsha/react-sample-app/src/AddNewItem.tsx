import React, {useState} from "react";
import { NewItemForm } from "./NewItemForm";

interface NewItemProps{
    onAdd(text:String):void //callback function to create item on clicking the button
    toggleButtonText:String //text that renders when this comp is button

}

export const AddNewItem = (props: NewItemProps) =>{
    const [showForm, setShowForm] = useState(false);
    const {onAdd, toggleButtonText} =props;

    if(showForm){
        <NewItemForm onAdd={text=>{onAdd(text); setShowForm(false)}} />
    }
    return(
        <button onClick={()=>setShowForm(true)}>{toggleButtonText}</button>
    )
}