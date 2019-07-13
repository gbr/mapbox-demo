import React from 'react'

import PlaceItem from './PlaceItem'

import './PlacesPanel.css'

const PlacesPanel = props => {
    let placeItems =
        <div className="no-results">Nothing added yet</div>

    if (props.places.length > 0) {
        placeItems = props.places.map((place, idx) => (
            <PlaceItem place={place} key={idx} />
        ))
    }

    return (
        <div className="places">
            {placeItems}
        </div>
    )
}

export default PlacesPanel