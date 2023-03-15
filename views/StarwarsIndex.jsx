import React from 'react'

function StarwarsIndex(props) {
    return (
        <div>
            <h1>Welcome to The Starwars Facts Page</h1>
            <h3>Click on the Links below for more details</h3>
            <ul>
            {props.starwarsfacts.map((fact, index) => 
                <li key={index}>
                <a href={`/starwarsfacts/${fact.id}`}>{fact.title}</a>
                </li>
            )}
            
            </ul>
            <a href={props.factInfo.url}><strong>Source</strong></a>
            <br />
            <a href="/">Home</a>    
        </div>
    )
}

export default StarwarsIndex