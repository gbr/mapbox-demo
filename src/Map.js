import React, { useEffect } from 'react'
import mapbox from 'mapbox-gl'

import './Map.css'

const Map = props => {
    const { map, setMap, style } = props

    useEffect(() => {
        mapbox.accessToken = 'pk.eyJ1Ijoic2lvbnlkdXMiLCJhIjoiY2p4ejM0bDEyMDBiMTNtb3pzYWhtMTJiMiJ9.ob1jCnbAVfX3kPjsa1C9tA'

        const map = new mapbox.Map({
            container: 'map',
            center: [-73.9808, 40.7648],
            zoom: 6,
            style,

        });
        const navigationControl =
            new mapbox.NavigationControl()

        map.addControl(navigationControl)

        setMap(map)
    }, [setMap, style])

    if (map) {
        map.setStyle(style)
    }

    return (
        <div id="map" />
    )
}

export default Map
