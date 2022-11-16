import React from 'react'
import "../ComponentCss/HobbieA.css"
function HobbieB({ ...props }) {
  return (
    <a href={props.link} className='styledA' target="_blank"> {props.text}</a>
  )
}

export default HobbieB
