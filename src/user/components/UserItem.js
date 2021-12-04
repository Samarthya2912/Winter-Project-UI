import React from 'react'
import './UserItem.css'
import { Link } from 'react-router-dom'

const UserItem = props => {
    return (
        <li className="user-item">
            <Link to={`/${props.id}/places`}>
                <div className="user-item__content center">
                    <div className="user-item__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.places.length} {props.places.length > 1? "places":"place"}</h3>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default UserItem
