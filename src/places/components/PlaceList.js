import React from 'react'
import PlaceItem from './PlaceItem'
import './PlaceList.css'

const PlaceList = props => {
    if(props.place_list.length === 0) return <div>
        <h1>No places found.</h1>
        <button>Share Place</button>
    </div>

    return (
        <ul className="place-list center column">
            {
                props.place_list.map(place => <PlaceItem {...place} key={place.id} />)
            }
        </ul>
    )
}

export default PlaceList
