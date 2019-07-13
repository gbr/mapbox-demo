import React from 'react'
import mapbox from 'mapbox-gl'

import { goTo } from '../helpers'

const PlaceItem = props => {
    const { map, place } = props

    if (map) {
        const popup = new mapbox.Popup({
            closeButton: false
        })

        popup.setHTML(place.name)

        const marker = new mapbox.Marker({
            color: '#2727e6'
        })

        marker.setLngLat(place.center)
        marker.setPopup(popup)

        marker.addTo(map)
    }
    return (
        <div
            className="place-item"
            onClick={() => goTo(place)}
        >
            <div>
                {place.name}
            </div>
            <div>
                ({place.center[1]}, {place.center[0]})
                </div>
        </div >
    )
}

export default PlaceItem