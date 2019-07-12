import React from 'react';

import Map from './Map'
import PlacesPanel from './PlacesPanel'
import Search from './Search'
import Toggler from './Toggler'

import './App.css';

// TODOs
// 1. Fix the full app state props pass-down anti-pattern
// 2. Prettify the PlaceItem output
// 3. Mess around with the mapbox API and add more features...


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 30.7128,
      longitude: -74.0060,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: []
    }
  }
  render() {
    return (
      <div className="App">
        {/* TODO get rid of this anti-pattern */}
        <PlacesPanel app={this} />
        <Search app={this} />
        <Toggler app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
