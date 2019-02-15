import React from 'react';
import './StarWars.css';


function CharCard(props) {
    return (
    <div className='char-card'>
        <h2>{props.name}</h2>
        <div className="char-info">
            <p>Gender: {props.gender}</p>
            <p>Born: {props.birth_year}</p>
            <p>Eye color: {props.eye_color}</p>
            <p>Hair color: {props.hair}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Skin color: {props.skin_color}</p>
        </div>
    </div>
    );
}
  
  export default CharCard;
  