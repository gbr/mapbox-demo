import React from 'react'

import './Toggler.css'

const Toggler = props => {
    const styles = [
        {
            name: 'Satellite',
            url: 'mapbox://styles/mapbox/satellite-v9'
        },
        {
            name: 'Dark',
            url: 'mapbox://styles/mapbox/dark-v9'
        },
        {
            name: 'Light',
            url: 'mapbox://styles/mapbox/light-v9'
        },
    ]

    const buttons = styles.map((style, index) => {
        let className = ""

        if (style.url === props.style) {
            className = "selected"
        }

        return (
            <button
                className={className}
                key={index}
                onClick={() => props.setStyle(style.url)}>
                {style.name}
            </button>
        )
    })
    return (
        <div className="toggler">
            {buttons}
        </div>
    )
}

export default Toggler