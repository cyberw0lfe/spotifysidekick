import React from 'react'
import './styles.css'

const header = (title) => (
  <div>
    <div id='card-header-container'>
      <div id='card-header-content'>{title}</div>
    </div>
    <hr/>
  </div>
)

export default (props) => {
  return (
    <div id='card-container' style={props.style} className={props.className}>
      {props.title ? header(props.title) : <div/>}
      {props.content ? <div id='card-content'>{props.content}</div> : <div/>}
    </div>
  )
}