import React, { useState } from 'react';

import Map from './Map'
import PlacesPanel from './PlacesPanel'
import Search from './Search'
import Toggler from './Toggler'

import styles from '../data/styles'

import '../styles/App.css';

// TODO mess around with the mapbox API and add more features...

const App = () => {
  const [map, setMap] = useState(null)
  const [style, setStyle] =
    useState(styles.find(el => el.name === 'Dark').url)
  const [places, setPlaces] = useState([])

  return (
    <div className="App">
      <PlacesPanel map={map} places={places} />
      <Search map={map} places={places} setPlaces={setPlaces} />
      <Toggler style={style} setStyle={setStyle} />
      <Map map={map} setMap={setMap} style={style} />
    </div>
  )
}

export default App;
