import React from 'react'

const style = {
  // type: text, password, number, etc.
  maxWidth: '400px',
  padding: '10px 5px',
  boxSizing: 'border-box',
  border: 'none',
  borderBottom: '2px solid #9e9e9e',
  fontSize: '18px',
  width: 'inherit'
}

// add :focus css attribute

export default (props) => {
  return (
    <input type={props.type} id={props.id} name={props.id} style={style} placeholder={props.placeholder}></input>
  )
}