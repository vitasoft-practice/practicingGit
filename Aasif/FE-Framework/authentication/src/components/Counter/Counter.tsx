'use client'

import React from 'react'
import { incrementCounter, decrementCounter } from '@/app/redux/actions/countersAction'
import { useAppDispatch, useAppSelector } from '@/app/redux/store'


const Counter = () => {
    const { count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <>
            <button onClick={() => dispatch(incrementCounter())}>+</button>
            <h3>{count}</h3>
            <button onClick={() => dispatch(decrementCounter())}>-</button>
        </>
    )
}

export default Counter