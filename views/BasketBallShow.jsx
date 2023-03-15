import React from 'react'

function BasketBallShow(props) {
    return (
        <div>
            <h1>Show View Details</h1>
            <p><strong>{props.fact.title}</strong> </p>
            <p>Description:</p>
            <p>{props.fact.description}</p>
           
            
            <a href="/basketballfacts">BasketBall Facts Home</a>
            <br />
            <a href={`/basketballfacts/${props.fact.id - 1}`}>Previous</a>
            <br />
            <a href={`/basketballfacts/${props.fact.id + 1}`}>Next</a>
            <br />
            <a href="/">Home</a>
        </div>
    )
}

export default BasketBallShow;