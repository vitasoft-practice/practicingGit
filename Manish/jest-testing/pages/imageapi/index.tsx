import { getDog } from "../api/dog";
import React, { useState } from 'react'

export default function Home(props) {
    const [dog, setDog] = React.useState(props.initialDog);
    const [loading, setLoading] = React.useState(false);
    const fetchNewDog = async () => {
        setLoading(true);
        try {
            const newDog = await getDog();
            setDog(newDog);
        } catch (e) {
            setDog({ status: "error" });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading new dog...</div>;
    }

    return (
        <div>
            {dog.status !== "error" && <img src={dog.message} alt="a random dog" />}
            
            {dog.status === "error" && <div>Error fetching dog</div>}
            <button onClick={fetchNewDog}>Get new Images!</button>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const dog = await getDog();
        return { props: { initialDog: dog } };
    } catch (e) {
        return {
            props: {
                initialDog: {
                    status: "error"
                }
            }
        };
    }
}