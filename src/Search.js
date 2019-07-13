import React, { useState } from 'react'

import './Search.css'

const Search = props => {
    const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const accessToken = 'pk.eyJ1Ijoic2lvbnlkdXMiLCJhIjoiY2p4ejM0bDEyMDBiMTNtb3pzYWhtMTJiMiJ9.ob1jCnbAVfX3kPjsa1C9tA'
        const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const places = [...props.places]

                places.push({
                    name: query,
                    center: data.features[0].center
                })

                props.setPlaces(places)

                setQuery('')
            })

    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Add place..."
                type="text"
            />
        </form>
    )
}

export default Search