import React from 'react'
import mapbox from 'mapbox-gl'

import './Map.css'

class Map extends React.Component {

    // useEffect(() => {
    componentDidMount() {
        mapbox.accessToken = 'pk.eyJ1Ijoic2lvbnlkdXMiLCJhIjoiY2p4ejM0bDEyMDBiMTNtb3pzYWhtMTJiMiJ9.ob1jCnbAVfX3kPjsa1C9tA';

        const map = new mapbox.Map({
            container: 'map',
            center: [-73.9808, 40.7648],
            zoom: 6,
            style: this.props.style,

        });

        const navigationControl =
            new mapbox.NavigationControl()
        map.addControl(navigationControl)
        this.props.setMap(map)
    }


    render() {

        if (this.props.map) {
            this.props.map.setStyle(this.props.style)
        }

        return (
            <div id="map" />
        )
    }
}

export default Map
