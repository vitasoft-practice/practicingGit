export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"

export interface Icounter{
    value:number
}

//action creators
export type counter_action={
        type:string
        value:Icounter
}

export const increment_counter=(value:Icounter)=>{
    const action: counter_action={
        type : INCREMENT_COUNTER,
        value,
    }
}
   


export const decrement_counter=(value:Icounter)=>{
    const action: counter_action={
        type : DECREMENT_COUNTER,
        value,
    }
}
   