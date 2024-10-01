'use client'
import { createContext, useContext, useState } from 'react';

export type CounterContextT = {
    count: number, increment: () => void, decrement: () => void
}

export const CounterContext = createContext({
    count: 0, increment: () => { }, decrement: () => { }
});

export function CounterProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
}

export const useCounter = () => {
    const context: CounterContextT = useContext(CounterContext);
    return context;
}