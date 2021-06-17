import React, { useState } from 'react'
import TodoForm from './TodoForm'
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

const TodoLists = () => {
    const [data, setData] = useState<string>('')
    const [list, setList] = useState<string[]>([])
    const [underLine, setUnderLine] = useState<boolean>(false)

    const handleChange = (e: any) => {
        setData(e.target.value)
    }
    const showData = () => {
        setList((prevVal) => {

            return [...prevVal, data]
        })
        // setUnderLine((preval) => {
        //     return [...preval,false]
        // })
        setData(" ")
    }
    const cutLines = (id:number) => {
        // setUnderLine((preval) => {
        //     return preval.filter((cur,index) => {
        //         return index!==id
        //     })
        // })
        setUnderLine(!underLine)

    }
    const deleteItems = (id: number) => {
        setList((prevVal) => {
            return prevVal.filter((cur, index) => {
                return index !== id
            })
        })

    }
    return (
        <>
            <TodoForm changeHandle={handleChange} onclicks={showData} Value={data} />

            <ul className="todo-list">


                {
                    list.map((curItem, index) => {
                        return (
                            <>

                                <li key={index} style={{ textDecoration: underLine ? "line-through" : "none" }}>

                                    <ClearIcon className="crxicon" onClick={()=>cutLines(index)} />

                                    {/* <span onClick={cutLines}>
                                        <ClearIcon className="crxicon" />
                                    </span> */}

                                    {curItem}

                                    <DeleteIcon className="delicon" onClick={() => deleteItems(index)} />
                                </li>


                            </>
                        )
                    })
                }
            </ul>


        </>
    )
}

export default TodoLists
