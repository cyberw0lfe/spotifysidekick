import React, { useState } from 'react'
import PlaylistInfoPanel from './PlaylistInfoPanel'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'

export default () => {
  const [playlistType, setPlaylistType] = useState('')
  const [seeds, setSeeds] = useState([])
  
  return (
    <div>
      <PlaylistInfoPanel setPlaylistType={setPlaylistType}/>
      {
        playlistType === 'artist'
        ? <SeedArtistForm seeds={seeds} setSeeds={setSeeds} />
        : <SeedGenres seeds={seeds} setSeeds={setSeeds} />
      }
      <SelectedSeeds seeds={seeds} setSeeds={setSeeds} />
    </div>
  )
}
