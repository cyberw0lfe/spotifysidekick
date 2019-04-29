import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Paper from '../common/Paper'
import Panel from '../common/FixedPanel'
import { generateArtistPlaylist } from '../../utils/fetch'
import './styles.css'



const addArtist = (event, seedArtists, setSeedArtists) => {
  event.preventDefault()
  const seedArtist = document.getElementById('seed-artist').value
  setSeedArtists([...seedArtists, seedArtist])
  document.getElementById('seed-artist').value = ''
}

const generatePlaylist = async (event, seedArtists, setPlaylist) => {
  event.preventDefault()
  const name = document.getElementById('playlist-name').value
  const limit = document.getElementById('limit').value
  const save = document.getElementById('save-toggle').checked
  const playlist = await generateArtistPlaylist(seedArtists, name, limit, save)
  setPlaylist(playlist)
}

const renderSeedArtists = (seedArtists) => {
  if(seedArtists.length > 0) {
    return seedArtists.map(seedArtist => {
      return <div key={seedArtist}>{seedArtist}</div>
    })
  }
}

const renderPlaylist = (playlist) => {
  if(playlist.length > 0) {
    return playlist.map(track => {
      return <div key={track.name+track.artists[0].name}>{track.name} - {track.artists[0].name}</div>
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
  const [playlist, setPlaylist] = useState([])

  return (
    <div>
      <Panel content={
        <form id='artist-playlist-form' onSubmit={(event) => {generatePlaylist(event, seedArtists, setPlaylist)}}>
          <Input type='number' placeholder='track count' id='limit' />
          <Input type='text' placeholder='playlist name' id='playlist-name' />
          <div>
            <Input type='checkbox' id='save-toggle' /> Save Playlist?
          </div>
          <Button text='Submit' />
        </form>
      } />

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
        <Card style={styles.playlistCard} title='Playlist' content={renderPlaylist(playlist)} />
      </div>
    </div>
  )
}