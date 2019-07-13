import React, { useEffect } from 'react'
import mapbox from 'mapbox-gl'

import './Map.css'


const Map = props => {
    console.log(props)

    // useEffect(() => {
    mapbox.accessToken = 'pk.eyJ1Ijoic2lvbnlkdXMiLCJhIjoiY2p4ejM0bDEyMDBiMTNtb3pzYWhtMTJiMiJ9.ob1jCnbAVfX3kPjsa1C9tA';

    const map = new mapbox.Map({
        container: 'map',
        style: props.style,
        center: [-74.0060, 30.7128],
        zoom: 1,

    });

    const navigationControl =
        new mapbox.NavigationControl()
    map.addControl(navigationControl)

    // props.setMap(map)
    // return
    // })

    if (map) {
        map.setStyle(props.style)
    }

    return (
        <div id="map">

        </div >
    )
}

export default Map
