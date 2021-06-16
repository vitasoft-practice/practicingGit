import React, { useEffect, useState } from 'react'
import { cursorTo } from 'readline';
import { person } from '../interface';

const FetchData = () => {
    const [person, setPerson] = useState<person[]>([])
    const getData = async () => {
        try {
            const url = 'https://reqres.in/api/users';
            const result = await fetch(url);
            const res = await result.json();
            console.log(res);
            console.log(res.data[0].email);

            setPerson(res.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <>
            hello FetchData
            {
                person.map((cur) => {
                    return (
                        <>
                            <span>{cur.id}</span>
                            <span>{cur.first_name}</span>
                            <li>{cur.email}</li>
                        </>
                    )
                })
            }
        </>
    )
}

export default FetchData
