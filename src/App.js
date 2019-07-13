import React, { useState } from 'react';

import Map from './Map'
import PlacesPanel from './PlacesPanel'
import Search from './Search'
import Toggler from './Toggler'

import './App.css';

// TODO
// 2. Prettify the PlaceItem output
// 3. Mess around with the mapbox API and add more features...


const App = () => {
  // const [map, setMap] = useState(null)
  const [style, setStyle] = useState('mapbox://styles/mapbox/dark-v9')
  const [places, setPlaces] = useState([])

  return (
    <div className="App">
      <PlacesPanel places={places} />
      <Search places={places} setPlaces={setPlaces} />
      <Toggler style={style} setStyle={setStyle} />
      <Map style={style} />
    </div>
  );
}

export default App;
