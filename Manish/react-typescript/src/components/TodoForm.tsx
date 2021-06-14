import { AnyMxRecord } from 'dns'
import React, { useState } from 'react'
import TodoLists from './TodoLists'

const TodoForm = ({ changeHandle, onclicks, Value }:any) => {

    return (
        <>
            {/* <h2>{data}</h2> */}
            <div className="main-todo-form">

           

            <input className="input-text" type="text" onChange={changeHandle} value={Value} placeholder="Add Tasks" />
            <button className="add-btn" onClick={onclicks}>+</button>
            </div>
        </>
    )
}

export default TodoForm
