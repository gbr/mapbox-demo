import React from 'react'

import PlaceItem from './PlaceItem'

import './PlacesPanel.css'

const PlacesPanel = props => {
    const { places, map } = props
    let placeItems

    if (places.length > 0) {
        placeItems = places.map((place, idx) => (
            <PlaceItem map={map} place={place} key={idx} />
        ))
    } else {
        placeItems =
            <div className="no-results">Nothing added yet</div>
    }

    console.log(placeItems)

    return (
        <div className="places">
            {placeItems}
        </div>
    )
}

export default PlacesPanel