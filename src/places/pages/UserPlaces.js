import React, { useEffect } from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'
import Button from '../../shared/FormElelments/Button'
import useApiCall from '../../shared/hooks/api-call-hook'

const UserPlaces = props => {
    const { uid } = useParams();
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
