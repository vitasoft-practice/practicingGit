import React, { useState } from 'react'

const SimpleCounter = () => {
    const [counterVal, setCounterVal] = useState<Number>(0)
    const [inputVal, setInputVal] = useState<Number>(1)


    const addCount = () => {
        setCounterVal(counterVal + inputVal)
    }
    const subCount = () => {
        setCounterVal(counterVal - inputVal)
    }

    return (
        <div>

            <h4>Counter</h4>
            <h6
                data-testid='counterval'
                className={`${counterVal >= 100 ? 'green' : ''}${counterVal < 0 ? 'red' : ''}`}
            >{counterVal}</h6>
            <button data-testid='counterSubBtn' onClick={() => subCount()}>-</button>

            <input
                data-testid='counterinput'
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(parseInt(e.target.value))}
            />

            <button data-testid='counterAddBtn' onClick={() => addCount()}>+</button>

        </div>
    )
}

export default SimpleCounter
