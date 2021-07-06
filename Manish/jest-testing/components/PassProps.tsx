import React from 'react'
import ChildProps from '../components/ChildProps'

const PassProps = () => {
    const handleClick = () => {

        console.log('clicked');
    }
    return (
        <div>
           
            <ChildProps onClick={handleClick}/>

        </div>
    )
}

export default PassProps
