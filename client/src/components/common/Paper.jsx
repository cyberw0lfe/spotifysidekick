import React from 'react'
import './styles.css'

export default (props) => (
  <div id='card-container' style={props.style} className={props.className}>{props.content}</div>
)