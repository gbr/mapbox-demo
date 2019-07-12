import React, { Component } from 'react'

import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        const accessToken = 'pk.eyJ1Ijoic2lvbnlkdXMiLCJhIjoiY2p4ejM0bDEyMDBiMTNtb3pzYWhtMTJiMiJ9.ob1jCnbAVfX3kPjsa1C9tA'
        const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`

        fetch(url)
            .then(response => response.json())
            .then(data => {

                const places = this.props.app.state.places
                const firstResult = data.features[0]

                places.push({
                    name: this.state.value,
                    longitude: firstResult.center[0],
                    latitude: firstResult.center[1],
                })

                this.props.app.setState({
                    places: places
                })

                this.setState({
                    value: ''
                })
            })

    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Add place..."
                    type="text"
                />
            </form>
        )
    }
}
