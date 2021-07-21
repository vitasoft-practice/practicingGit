import React , {useState} from "react";

interface NewItemFormProps{
    onAdd(text:String):void; //callback passed throiugh addnew item props
}

export const NewItemForm=(onAdd:NewItemFormProps)=>{
    const [text, setText]=useState("");
  
    return(
        <form>
            <input value={text} type="text" onChange={e=>setText(e.target.value)}/>
            <button onClick={()=>onAdd}>Create</button>
        </form>    )

}