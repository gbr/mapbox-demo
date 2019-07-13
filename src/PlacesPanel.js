import React from 'react'

import PlaceItem from './PlaceItem'

import './PlacesPanel.css'

const PlacesPanel = props => {
    let placeItems

    console.log(props.places)
    if (props.places.length > 0) {
        placeItems = props.places.map((place, idx) => (
            <PlaceItem map={props.map} place={place} key={idx} />
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