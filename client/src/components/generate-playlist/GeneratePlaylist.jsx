import React, { useState } from 'react'
import PlaylistInfoPanel from './PlaylistInfoPanel'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'
import './styles.css'

export default () => {
  const [playlistType, setPlaylistType] = useState('')
  const [seeds, setSeeds] = useState([])
  
  return (
    <div>
      <PlaylistInfoPanel setPlaylistType={setPlaylistType} seeds={seeds} />
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
