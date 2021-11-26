import React, { useEffect } from 'react'
import './Map.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const Map = props => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtMjkxMiIsImEiOiJja3dmMXJocTcwYWhvMzJtdTFhaGx0MTdmIn0.Mr8BzXGKJDeUq_MOYSrbgw';
        // var map = new mapboxgl.Map({
        //     container: 'map',
        //     style: 'mapbox://styles/mapbox/streets-v11'
        // });

        // const marker = new mapboxgl.Marker() // initialize a new marker
        //     .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
        //     .addTo(map); // Add the marker to the map
    }, [])

    return (
        <div id={`map`} className="map">
            hello
        </div>
    )
}

export default Map
