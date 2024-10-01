'use client'
import { CounterContext, CounterProvider } from '@/app/context/CounterContext';
import React, { useContext } from 'react'

const page = () => {
    let { count, increment, decrement }: any = useContext(CounterContext);  // provider wrapped in rootLayout
    return (
        <>
            <button onClick={increment}>+</button>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default page