import React from 'react'
import Card from '../../Components/Card'

function CardPage() {
    const data = [{
        title: "Card 1",
        content: "This is Content 1"
    }, {
        title: "Card 2",
        content: "This is Content 2"
    }, {
        title: "Card 3",
        content: "This is Content 3"
    }, {
        title: "Card 4",
        content: "This is Content 4"
    }, {
        title: "Card 5",
        content: "This is Content 5"
    }]
    return (
        <div className="card_container m-2">
            {data.map(el => <Card {...el} />)}
        </div>
    )
}

export default CardPage