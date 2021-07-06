import React from 'react'

const ChildProps = ({ onClick }: any) => {
    return (
        <div>
            <button onClick={onClick}>click here!</button>
        </div>
    )
}

export default ChildProps
