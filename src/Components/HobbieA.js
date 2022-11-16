import React from 'react'
import "../ComponentCss/HobbieA.css"
const HobbieA = ({ ...props }) => {
    return (
        <a href={props.link} className='styledA' > {props.text}</a>
    )
}

export default HobbieA
