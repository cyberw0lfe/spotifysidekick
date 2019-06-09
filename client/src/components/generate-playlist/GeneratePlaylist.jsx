import React, { useState } from 'react'
import FormPanel from './FormPanel'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'
import Card from '../common/Card'
import './styles.css'
import '../common/responsive.css'

const renderPlaylist = (playlist) => {
  if(playlist && playlist.length > 0) {
    return playlist.map(track => {
      return <div key={track.name+track.artists[0].name}>{track.name} - {track.artists[0].name}</div>
    })
  }
}

export default () => {
  const [state, setState] = useState({
    playlistType: 'genre',
    seeds: [],
    playlist: [],
  })

  return (
    <div className='row'>
      <FormPanel state={state} setState={setState} className='col-3 col-s-6'/>
      <div>
        {
          state.playlistType === 'artist'
          ? <SeedArtistForm state={state} setState={setState} className='col-3 col-s-6'/>
          : <SeedGenres state={state} setState={setState} className='col-3 col-s-6'/>
        }
        <SelectedSeeds state={state} setState={setState} className='col-3 col-s-6'/>
        <Card title='Playlist' content={renderPlaylist(state.playlist)} className='col-3 col-s-6'/>
      </div>
    </div>
  )
}
