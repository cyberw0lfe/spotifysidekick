import React from 'react'
import './styles.css'

export default (props) => (
  <div id='card-container' style={props.style}>{props.content}</div>
)