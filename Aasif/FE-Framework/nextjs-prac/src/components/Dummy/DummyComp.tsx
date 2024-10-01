import React from 'react'

type DummyProps = {
    text: string
}

const DummyComp = ({ text }: DummyProps) => {
    return (
        <div>{text}</div>
    )
}

export default DummyComp