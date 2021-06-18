import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/actions/countersAction'


const CounterRedux = () => {
    const count = useSelector((state: any) => state.counter)
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(incrementCounter())}>+</button>
            <input type="text" value={count} />

            {/* <h4>{count}</h4> */}

            <button onClick={() => dispatch(decrementCounter())}>-</button>
        </>
    )
}

export default CounterRedux