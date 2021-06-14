import React from 'react'
import TodoLists from './TodoLists'

const Todo = () => {
    const [data, setData] = useState('')
    const [list, setList] = useState('')
    const handleChange = (e: any) => {
        setData(e.target.value)
    }
    const showData = () => {
        setList(data)
    }
    return (
        <div>
           
            <TodoLists changeHandle={handleChange} onclicks={showData} />
        </div>
    )
}

export default Todo
