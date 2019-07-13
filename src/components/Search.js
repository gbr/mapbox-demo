import React, { useEffect, useState } from 'react'

import { fetchQuery, goTo } from '../helpers'

import '../styles/Search.css'

const Search = props => {
    const { map, places, setPlaces } = props
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchStartingPlace = async () => {
            const newPlace =
                await fetchQuery('San Francisco')
            if (map) goTo(map, newPlace)
            setPlaces([newPlace])
        }
        fetchStartingPlace()
    }, [map, setPlaces])

    const handleSubmit = (event, query) => {
        event.preventDefault()

        const fetchNewPlace = async () => {
            const newPlace = await fetchQuery(query)
            goTo(map, newPlace)
            setPlaces([...places, newPlace])
            setQuery('')
        }
        fetchNewPlace()
    }

    return (
        <form
            action=""
            onSubmit={event => handleSubmit(event, query)}>
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