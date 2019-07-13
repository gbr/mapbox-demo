import React from 'react'
import mapbox from 'mapbox-gl'

const PlaceItem = props => {
    const goTo = () => {
        const map = props.map

        map.flyTo({
            center: [
                props.place.longitude,
                props.place.latitude
            ],
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

        marker.setLngLat([place.longitude, place.latitude])
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
                ({place.latitude}, {place.longitude})
                </div>
        </div >
    )
}

export default PlaceItem