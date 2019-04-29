import React from 'react'
import './styles.css'

// add :focus css attribute
export default (props) => {
  return (
    <input
      className='input'
      type={props.type}
      id={props.id}
      name={props.id}
      style={props.style}
      placeholder={props.placeholder}
      autoComplete='off'
    ></input>
  )
}