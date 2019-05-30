import React, { useState } from 'react'
import PlaylistInfoPanel from './PlaylistInfoPanel'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'
import './styles.css'

export default () => {
  const [playlistType, setPlaylistType] = useState('')
  const [seeds, setSeeds] = useState([])
  const [playlist, setPlaylist] = useState([])
  
  return (
    <div>
      <PlaylistInfoPanel playlistType={playlistType} setPlaylistType={setPlaylistType} seeds={seeds} setPlaylist={setPlaylist}/>
      <div id='content-container'>
        {
          playlistType === 'artist'
          ? <SeedArtistForm seeds={seeds} setSeeds={setSeeds} />
          : <SeedGenres seeds={seeds} setSeeds={setSeeds} />
        }
        <SelectedSeeds seeds={seeds} setSeeds={setSeeds} />
      </div>
    </div>
  )
}
