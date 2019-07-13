import React, { useEffect } from 'react'
import mapbox from 'mapbox-gl'

import defaultPublicAccessToken from '../data/accessToken';
import '../styles/Map.css'

const Map = props => {
    const { map, setMap, style } = props

    useEffect(() => {
        mapbox.accessToken = defaultPublicAccessToken

        const map = new mapbox.Map({
            container: 'map',
            center: [-73.9808, 40.7648],
            zoom: 10,
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
