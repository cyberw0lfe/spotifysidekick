import React from 'react'
import './styles.css'

// add :focus css attribute
export default (props) => {
  return (
    <input
      className={`input ${props.className}`}
      type={props.type}
      id={props.id}
      name={props.name}
      style={props.style}
      placeholder={props.placeholder}
      onClick={props.onClick}
      autoComplete='off'
    ></input>
  )
}