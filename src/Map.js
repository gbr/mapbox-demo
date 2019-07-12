import React, { Component } from 'react'
import mapbox from 'mapbox-gl'

import './Map.css'

export class Map extends Component {
    componentDidMount() {
        const app = this.props.app

        mapbox.accessToken = 'pk.eyJ1Ijoic2lvbnlkdXMiLCJhIjoiY2p4ejM0bDEyMDBiMTNtb3pzYWhtMTJiMiJ9.ob1jCnbAVfX3kPjsa1C9tA';

        const map = new mapbox.Map({
            container: 'map',
            style: app.state.style,
            center: [
                app.state.longitude,
                app.state.latitude
            ],
            zoom: 1,

        });

        const navigationControl = new mapbox.NavigationControl({
            // showCompass: false
        })
        map.addControl(navigationControl)

        this.props.app.setState({
            map: map
        })
    }

    render() {
        const app = this.props.app
        const map = app.state.map

        if (map) {
            map.setStyle(app.state.style)
        }

        return (
            <div id="map">

            </div >
        )
    }
}

export default Map
