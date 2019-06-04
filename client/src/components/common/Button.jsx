import React from 'react'
import './styles.css'

// onMouseEnter and onMouseLeave for hover effects

export default (props) => (
  <button 
    id='button'
    className={props.className}
    style={props.style}
    onClick={props.onClick}
  >
    {props.text}
  </button>
)