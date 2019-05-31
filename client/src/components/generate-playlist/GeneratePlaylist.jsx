import React, { useState } from 'react'
import FormPanel from './FormPanel'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'
import Card from '../common/Card'
import './styles.css'

const renderPlaylist = (playlist) => {
  if(playlist && playlist.length > 0) {
    return playlist.map(track => {
      return <div key={track.name+track.artists[0].name}>{track.name} - {track.artists[0].name}</div>
    })
  }
}

export default () => {
  const [playlistType, setPlaylistType] = useState('')
  const [seeds, setSeeds] = useState([])
  const [playlist, setPlaylist] = useState([])
  
  return (
    <div>
      <FormPanel playlistType={playlistType} setPlaylistType={setPlaylistType} seeds={seeds} setPlaylist={setPlaylist}/>
      <div id='content-container'>
        {
          playlistType === 'artist'
          ? <SeedArtistForm seeds={seeds} setSeeds={setSeeds} />
          : <SeedGenres seeds={seeds} setSeeds={setSeeds} />
        }
        <SelectedSeeds seeds={seeds} setSeeds={setSeeds} />
        <Card title='Playlist' content={renderPlaylist(playlist)} />
      </div>
    </div>
  )
}
