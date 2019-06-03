import React from 'react'
import Card from '../common/Card'

const unselectGenre = (seed, state, setState) => {
  const newSeeds = state.seeds
  newSeeds.splice(newSeeds.indexOf(seed), 1)
  setState({
    ...state,
    seeds: newSeeds
  })
}

const renderSeeds = (state, setState) => {
  if(state.seeds.length > 0) {
    return state.seeds.map(seed => {
      return <div key={seed} className='genre-list-item' onClick={() => unselectGenre(seed, state, setState)}>{seed}</div>
    })
  }
}

export default ({state, setState}) => {
  return (
    <Card title='Seeds' content={renderSeeds(state, setState)} />
  )
}