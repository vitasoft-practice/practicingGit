import React from 'react'
import { useParams } from 'react-router-dom'

const ParamDynamic = () => {
    const { userId, id }:any = useParams();
    return (
        <>
            <h4>I am {userId} page inside {id} page</h4>
        </>
    )
}

export default ParamDynamic