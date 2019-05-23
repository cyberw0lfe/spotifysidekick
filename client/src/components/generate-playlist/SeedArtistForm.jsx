import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Paper from '../common/Paper'

const addArtist = (event, seedArtists, setSeedArtists) => {
  event.preventDefault()
  const seedArtist = document.getElementById('seed-artist').value
  setSeedArtists([...seedArtists, seedArtist])
  document.getElementById('seed-artist').value = ''
}

const renderSeedArtists = (seedArtists) => {
  if(seedArtists.length > 0) {
    return seedArtists.map(seedArtist => {
      return <div key={seedArtist}>{seedArtist}</div>
    })
  }
}

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

export default () => {
  const [seedArtists, setSeedArtists] = useState([])

  return (
    <div id='content-container'>
      <div>
        <Paper content={
          <form className='artist-playlist-form' onSubmit={(event) => addArtist(event, seedArtists, setSeedArtists)}>
            <Input style={styles.artistInput} type='text' placeholder='seed artist' id='seed-artist' />
            <div id='button-container'>
              <Button style={styles.addArtistButton} text='Add' />
              <Button style={styles.addArtistButton} text='Clear' onClick={() => setSeedArtists([])}/>
            </div>
          </form>
        } />
        <Card style={styles.seedArtistCard} title='Seed Artists' content={renderSeedArtists(seedArtists)} />
      </div>
    </div>
  )
}