import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.card.id}?set=set2&size=160x200`} alt="monster" />
    <h2>{props.card.name}</h2>
    <p>{props.card.email}</p>
  </div>
);
