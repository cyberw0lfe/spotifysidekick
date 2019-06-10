import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Paper from '../common/Paper'

const addArtist = (event, state, setState) => {
  event.preventDefault()
  const seed = document.getElementById('seed-artist').value
  setState({
    ...state,
    seeds: [...state.seeds, seed]
  })
  document.getElementById('seed-artist').value = ''
}

export default ({state, setState, className}) => (
  <Paper className={className} content={
    <form className='artist-playlist-form' onSubmit={(event) => addArtist(event, state, setState)}>
      <Input type='text' placeholder='seed artist' id='seed-artist' />
      <div id='button-container'>
        <Button text='Add' />
        <Button text='Clear' onClick={() => setState({...state, seeds: []})}/>
      </div>
    </form>
  } />
)