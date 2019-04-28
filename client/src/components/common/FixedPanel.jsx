import React from 'react'
import Paper from './Paper'

const defaultStyles = {
  height: '100vh',
  width: '200px',
  position: 'fixed'
}

export default (props) => {
  const style = {...defaultStyles, ...props.style}
  return <Paper style={style} content={props.content} />
}