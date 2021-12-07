import React, { useContext, useEffect } from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'
import Button from '../../shared/FormElelments/Button'
import useApiCall from '../../shared/hooks/api-call-hook'
import { AuthContext } from '../../shared/contexts/auth-context'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    }
]

const UserPlaces = props => {
    const { uid } = useParams();
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === uid);
    const [callState, sendRequest, clearError] = useApiCall(true);

    useEffect(() => {
        (async function() {
            try {
                await sendRequest(`http://localhost:5000/api/places/user/${uid}`);
            } catch(err) {}
        })()
    }, [])

    if(callState.isLoading) {
        return <div className="center column">
            <h1>Loading...</h1>
        </div>
    }

    if(callState.errorMessage) {
        return <div className="center column">
            <h1>Error: {callState.errorMessage}</h1>
            <Button onClick={clearError}>Go back!</Button>
        </div>
    }

    if(!callState.data.places.length) {
        return <div className="center column">
            <h1>No places found.</h1>
            <Button to="/places/new">Share place</Button>
        </div>
    }

    return (
        <div className="user-places no-overflow"> 
            <PlaceList place_list = {callState.data.places} />
        </div>
    )
}

export default UserPlaces
