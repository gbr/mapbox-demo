import axios from 'axios'

import defaultPublicAccessToken from './data/accessToken'

export const goTo = (map, place) => {
    map.flyTo({
        center: place.center,
        zoom: 10
    })
}

export const fetchQuery = async (query = '') => {
    const accessToken = defaultPublicAccessToken
    const url =
        `https://api.mapbox.com/geocoding/v5/mapbox.places/
            ${query}.json?access_token=${accessToken}`

    const { data } = await axios(url)
    const { place_name, center } = data.features[0]
    const newPlace = {
        name: place_name,
        center
    }

    return newPlace
}