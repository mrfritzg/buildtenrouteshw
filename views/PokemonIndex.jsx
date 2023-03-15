import React from 'react'

function PokemonIndex(props) {
    return (
        <div>
            <h1>Welcome to The Pokemon Facts Page</h1>
            <h3>Click on the Links below for more details</h3>
            <ul>
            {props.pokemonfacts.map((fact, index) => 
                <li key={index}>
                <a href={`/pokemonfacts/${fact.id}`}>{fact.title}</a>
                </li>
            )}
            
            </ul>
            <a href={props.factInfo.url}><strong>Source</strong></a>
            <br />
            <a href="/">Home</a>
        </div>
    )
}

export default PokemonIndex