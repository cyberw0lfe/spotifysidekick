import React from 'react'
const casual = require('casual-browserify')

const cardContainer = {
  display: 'inline-block',
  border: '2px solid black',
  maxWidth: '200px'
}

const headerContainer = {
  textAlign: 'center'
}

const header = {
  display: 'inline-block',
  padding: '2px 0px 5px',
  fontSize: '20px',
  wordWrap: 'break-word'
}

const body = {
  padding: '2px 2px 5px',
  wordWrap: 'break-word',
}

const hr = {
  margin: '0px'
}

export default () => {
  return (
    <div style={cardContainer}>
      <div style={headerContainer}>
        <div style={header}>{casual.short_description}</div>
      </div>
      <hr style={hr}/>
      <div style={body}>{casual.description}</div>
    </div>
  )
}