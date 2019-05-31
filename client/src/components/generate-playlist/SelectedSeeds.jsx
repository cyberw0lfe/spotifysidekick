import React from 'react'
import Card from '../common/Card'

const unselectGenre = (genre, seeds, setSeeds) => {
  const newState = [...seeds]
  newState.splice(newState.indexOf(genre), 1)
  setSeeds(newState)
}

const renderSeeds = (seeds, setSeeds) => {
  if(seeds.length > 0) {
    return seeds.map(seed => {
      return <div key={seed} className='genre-list-item' onClick={() => unselectGenre(seed, seeds, setSeeds)}>{seed}</div>
    })
  }
}

export default (props) => {
  return (
    <Card title='Seeds' content={renderSeeds(props.seeds, props.setSeeds)} />
  )
}