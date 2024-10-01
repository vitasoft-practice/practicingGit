'use client'

import React from 'react'

const error = (error: any) => {
    console.log(error)
    return (
        <div>{error.message}</div>
    )
}

export default error