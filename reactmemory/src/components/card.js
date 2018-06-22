import React from "react";
import './card.css';

const Card = (props) => {
    <div className="container">
    <div className="card" onClick={() => props.game(props.name)}>
        <img className="card-img" src={props.image} alt={props.name}/>
    </div>
    </div>
}

export default Card;