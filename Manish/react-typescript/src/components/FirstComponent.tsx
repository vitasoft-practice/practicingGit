import React, { useState } from 'react'
// import '../style.scss'

const FirstComponent = () => {
    const [count, setCount] = useState<number>(0)
   
    return (
        <>
            <div className="main-wrraper">
                <h1 className="author-title">hello this is First Components</h1>
                <h2 className="author-count">{count}</h2>
                <h4>Hello all okay</h4>
                <button className="author-btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </>
    )
}

export default FirstComponent
