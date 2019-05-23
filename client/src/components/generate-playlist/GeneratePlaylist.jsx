import React, { useState } from 'react'
import PlaylistInfoPanel from './PlaylistInfoPanel'
import GenrePlaylist from './genre-playlist/GenrePlaylist'

export default () => {
  const [playlistType, setPlaylistType] = useState('genre')

  return (
    <div>
      <PlaylistInfoPanel />
      <GenrePlaylist />
    </div>
  )
}
