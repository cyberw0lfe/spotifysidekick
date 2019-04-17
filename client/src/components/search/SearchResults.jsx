import React from 'react'

const getResultNames = (results) => {
  return results.items.map(result => {
    return <div>{result.name}</div>
  })
}

export default (props) => {
  if (!props.results) return <div/>
  return (
    <div>
      <h2>{props.type}</h2>
      {getResultNames(props.results)}
    </div>
  )
}