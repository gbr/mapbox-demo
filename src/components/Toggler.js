import React from 'react'

import styles from '../data/styles'
import '../styles/Toggler.css'

const Toggler = props => {
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