import React from 'react'

function FunfactsShow(props) {
    return (
        <div>
            <h1>Show View Details</h1>
            <p><strong>{props.fact.title}</strong> </p>
            <p>Description:</p>
            <p>{props.fact.description}</p>
           
            
            <a href="/funfacts">Fun Facts Home</a>
            <br />
            <a href={`/funfacts/${props.fact.id - 1}`}>Previous</a>
            <br />
            <a href={`/funfacts/${props.fact.id + 1}`}>Next</a>
            <br />
            <a href="/">Home</a>
        </div>
    )
}

export default FunfactsShow;