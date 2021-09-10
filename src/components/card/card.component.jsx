import React from "react";
import './card.styles.css'

export const Card = (props) => {
    return(
        <div className="card-container" key={props.monster.id}>
            <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}?size=200x200`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}