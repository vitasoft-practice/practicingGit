import React from 'react'
import Child from './Child'


const Parent = ({ open, data }: any) => {
    return (
        <>
            {open && <Child open={open} data={data} />}
        </>
    )
}

export default Parent
