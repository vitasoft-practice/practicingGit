export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"

export interface CounterInterface{
    value:number
}

//action creators
export type counter_action={
        type:string
        value:CounterInterface
}

export const increment_counter=(value:CounterInterface)=>{
    const action: counter_action={
        type : INCREMENT_COUNTER,
        value,
    }
}
   


export const decrement_counter=(value:CounterInterface)=>{
    const action: counter_action={
        type : DECREMENT_COUNTER,
        value,
    }
}
   