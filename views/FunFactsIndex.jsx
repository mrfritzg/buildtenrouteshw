import React from 'react'

function FunFactsIndex(props) {
    return (
        <div>
            <h1>Welcome to The Random Fun Facts Page</h1>
            <h3>Click on the Links below for more details</h3>
            <ul>
            {props.funfacts.map((fact, index) => 
                <li key={index}>
                <a href={`/funfacts/${fact.id}`}>{fact.title}</a>
                </li>
            )}
            
            </ul>
            <a href={props.factInfo.url}><strong>Source</strong></a>
            <br />
            <a href="/">Home</a>
        </div>
    )
}

export default FunFactsIndex