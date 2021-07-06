import React from 'react'

const Child = ({open,data}:any) => {
    return (
        <div>
            {open}
            {data}
        </div>
    )
}

export default Child
