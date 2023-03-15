import React from 'react'

function BasketBallIndex(props) {
    return (
        <div>
            <h1>Welcome to The BasketBall Facts Page</h1>
            <h3>Click on the Links below for more details</h3>
            <ul>
            {props.baketballfacts.map((fact, index) => 
                <li key={index}>
                <a href={`/basketballfacts/${fact.id}`}>{fact.title}</a>
                </li>
            )}
            
            </ul>
            <a href={props.factInfo.url}><strong>Source</strong></a>
            <br />
            <a href="/">Home</a>
        </div>
    )
}

export default BasketBallIndex