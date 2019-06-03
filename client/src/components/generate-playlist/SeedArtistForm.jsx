import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Paper from '../common/Paper'

const styles = {
  artistInput: {
    margin: '5px',
  },
  addArtistButton: {
    width: '45%',
    margin: '5px'
  },
}

const addArtist = (event, state, setState) => {
  event.preventDefault()
  const seed = document.getElementById('seed-artist').value
  setState({
    ...state,
    seeds: [...state.seeds, seed]
  })
  document.getElementById('seed-artist').value = ''
}

export default ({state, setState}) => (
  <Paper content={
    <form className='artist-playlist-form' onSubmit={(event) => addArtist(event, state, setState)}>
      <Input style={styles.artistInput} type='text' placeholder='seed artist' id='seed-artist' />
      <div id='button-container'>
        <Button style={styles.addArtistButton} text='Add' />
        <Button style={styles.addArtistButton} text='Clear' onClick={() => setState({...state, seeds: []})}/>
      </div>
    </form>
  } />
)