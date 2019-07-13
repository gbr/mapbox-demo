import React from 'react'
import mapbox from 'mapbox-gl'

const PlaceItem = props => {
    const goTo = () => {
        const map = props.map

        map.flyTo({
            center: props.place.center,
            zoom: 10
        })
    }

    const map = props.map
    const place = props.place

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
            onClick={() => goTo()}
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