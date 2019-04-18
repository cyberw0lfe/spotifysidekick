import React from 'react'

const cardContainer = {
  display: 'inline-block',
  border: '1px solid black',
  minWidth: '200px',
  maxWidth: '400px',
  maxHeight: '90vh',
  boxShadow: '3px 3px grey',
}

const headerContainer = {
  textAlign: 'center'
}

const header = {
  display: 'inline-block',
  padding: '2px 10px 5px',
  fontSize: '20px',
  wordWrap: 'break-word'
}

const body = {
  maxHeight: '80vh',
  overflow: 'scroll',
  padding: '2px 0px'
}

const hr = {
  margin: '0px',
}

const renderHeader = (title) => {
  if(title) {
    return (
      <div>
        <div style={headerContainer}>
          <div style={header}>{title}</div>
        </div>
        <hr style={hr}/>
      </div>
    )
  }
}

export default (props) => {
  return (
    <div style={cardContainer}>
      {renderHeader(props.title)}
      <div style={body}>{props.content}</div>
    </div>
  )
}