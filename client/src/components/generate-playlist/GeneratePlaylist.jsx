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
  const [state, setState] = useState({
    playlistType: '',
    seeds: [],
    playlist: [],
  })

  return (
    <div>
      <FormPanel state={state} setState={setState} />
      <div className='content-container'>
        {
          state.playlistType === 'artist'
          ? <SeedArtistForm state={state} setState={setState} />
          : <SeedGenres state={state} setState={setState} />
        }
        <SelectedSeeds state={state} setState={setState} />
        <Card title='Playlist' content={renderPlaylist(state.playlist)} />
      </div>
    </div>
  )
}
