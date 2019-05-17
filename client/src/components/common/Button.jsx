import React from 'react'
import './styles.css'

// onMouseEnter and onMouseLeave for hover effects

export default (props) => (
  <button 
    id='button'
    style={props.style}
    onClick={props.onClick}
  >
    {props.text}
  </button>
)