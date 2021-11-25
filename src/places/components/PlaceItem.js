import React from 'react'
import './PlaceItem.css'
import Button from '../../shared/FormElelments/Button'

const PlaceItem = props => {
    return (
        <li className="place-item">
            <img className="place-item__image" src={props.imageUrl} alt={props.title} />
            <div className="place-item__info center column">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <h4>{props.description}</h4>
            </div>
            <hr />
            <div className="place-item__action-buttons">
                <Button inverse>VIEW ON MAP</Button>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger>DELETE</Button>
            </div>
        </li>
    )
}

export default PlaceItem
