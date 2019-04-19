import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import { generateArtistPlaylist } from '../../utils/fetch'



const addArtist = (event, seedArtists, setSeedArtists) => {
  event.preventDefault()
  const seedArtist = document.getElementById('seed-artist').value
  setSeedArtists([...seedArtists, seedArtist])
  document.getElementById('seed-artist').value = ''
}

const generatePlaylist = async (seedArtists, setPlaylist) => {
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

export default () => {
  const [seedArtists, setSeedArtists] = useState([])
  const [playlist, setPlaylist] = useState([])

  return (
    <div>
      <form onSubmit={(event) => addArtist(event, seedArtists, setSeedArtists)}>
        <Input type='text' placeholder='seed artist' id='seed-artist' />
        <Button text='Add' />
        <Button text='Clear' onClick={() => setSeedArtists([])}/>
        <Button text='Submit' onClick={() => generatePlaylist(seedArtists, setPlaylist)} />
        <div>
          <Input type='number' placeholder='track count' id='limit'/>
          <Input type='text' placeholder='playlist name' id='playlist-name' />
          <Input type='checkbox' id='save-toggle' /> Save Playlist?
        </div>
      </form>
      <br/>
      <Card title='Seed Artists' content={renderSeedArtists(seedArtists)} />
      
      <Card title='Playlist' content={renderPlaylist(playlist)} />
    </div>
  )
}