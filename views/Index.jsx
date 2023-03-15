import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Welcome to The Facts Page</h1>
            <h3>Click on the Links below for different types of Facts</h3>
            <ul>
            {props.factslist.map((fact, index) => 
                <li key={index}>
                <a href={`/${fact.name}`}><strong>{fact.title}</strong></a>
                </li>
            )}
            
            </ul>
        </div>
    )
}

export default Index