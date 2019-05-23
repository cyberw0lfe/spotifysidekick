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
  seedArtistCard: {
    margin: '15px 0px 0px 0px',
  },
  playlistCard: {
    margin: '0px 0px 0px 20px',
    minWidth: '200px'
  }
}

const addArtist = (event, seeds, setSeeds) => {
  event.preventDefault()
  const seed = document.getElementById('seed-artist').value
  setSeeds([...seeds, seed])
  document.getElementById('seed-artist').value = ''
}

export default (props) => (
  <div id='content-container'>
      <Paper content={
        <form className='artist-playlist-form' onSubmit={(event) => addArtist(event, props.seeds, props.setSeeds)}>
          <Input style={styles.artistInput} type='text' placeholder='seed artist' id='seed-artist' />
          <div id='button-container'>
            <Button style={styles.addArtistButton} text='Add' />
            <Button style={styles.addArtistButton} text='Clear' onClick={() => props.setSeeds([])}/>
          </div>
        </form>
      } />
  </div>
)