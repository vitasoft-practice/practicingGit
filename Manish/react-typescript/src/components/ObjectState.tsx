import React, { useState } from 'react'
// import List from './List'

interface typePerson{
    person:{
        name:string
        age:number
        role:string
        des?:string
    }[]
}

const ObjectState = () => {
    const [person, setPerson] = useState<typePerson["person"]>([{
        name: "Manish Kumar",
        age: 21,
        role: "Full Stack Developer"
    }])
    return (
        <>
            {/* {
                person.map((cur) => {
                    return (
                        <>
                            <h2>{cur.name}</h2>

                            <p>{cur.age}</p>
                            <h4>{cur.role}</h4>
                        </>
                    )
                })
            } */}

            {/* <List people={person}/> */}
        </>
    )
}

export default ObjectState
