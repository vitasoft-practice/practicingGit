import React, { useState } from 'react'
import TodoLists from './TodoLists'

const TodoForm = ({ changeHandle, onclicks }) => {

    return (
        <>
            {/* <h2>{data}</h2> */}

            <input type="text" onChange={changeHandle} value={data} />
            <button onClick={onclicks}>+</button>
        </>
    )
}

export default TodoForm
