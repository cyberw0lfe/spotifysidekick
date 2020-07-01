import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

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
      return <ListGroupItem key={seed} onClick={() => unselectGenre(seed, state, setState)}>{seed}</ListGroupItem>
    })
  }
}

export default ({state, setState}) => {
  return (
    <Card className='tab-card'>
      <div className='seed-container'>
        <h5>Playlist Seeds</h5>
        <ListGroup>
          { renderSeeds(state, setState) }
        </ListGroup>
        <Button variant='primary' block onClick={() => setState({...state, seeds: []})}>Clear</Button>
      </div>
    </Card>
  )
}