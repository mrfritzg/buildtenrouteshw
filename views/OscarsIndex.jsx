import React from 'react'

function OscarsIndex(props) {
    return (
        <div>
            <h1>Welcome to The Oscar Facts Page</h1>
            <h3>Click on the Links below for more details</h3>
            <ul>
            {props.oscarfacts.map((fact, index) => 
                <li key={index}>
                <a href={`/oscarfacts/${fact.id}`}>{fact.title}</a>
                </li>
            )}
            
            </ul>
            <a href={props.factInfo.url}><strong>Source</strong></a>
            <br />
            <a href="/">Home</a>
        </div>
    )
}

export default OscarsIndex