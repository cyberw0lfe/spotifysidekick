import React, { useState } from 'react'
import PlaylistInfoPanel from './PlaylistInfoPanel'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'

export default () => {
  const [playlistType, setPlaylistType] = useState('')
  
  return (
    <div>
      <PlaylistInfoPanel setPlaylistType={setPlaylistType}/>
      {playlistType === 'genre' ? <SeedGenres /> : <SeedArtistForm />}
    </div>
  )
}
