import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Panel from '../common/FixedPanel'
import { executeSearch } from '../../utils/fetch';
import './styles.css'

const getSearchTypes = () => {
  const types = []
  if(document.getElementById('track-checkbox').checked) types.push('track')
  if(document.getElementById('artist-checkbox').checked) types.push('artist')
  if(document.getElementById('album-checkbox').checked) types.push('album')
  if(document.getElementById('playlist-checkbox').checked) types.push('playlist')
  return types
}

const search = async (event, setShowResult, setSearchResult) => {
  setShowResult({
    tracks: false,
    artists: false,
    albums: false,
    playlists: false
  })
  event.preventDefault()
  const query = document.getElementById('query').value
  const types = getSearchTypes()
  const limit = document.getElementById('limit').value
  const result = await executeSearch(query, types, limit)
  setSearchResult(result)
  setShowResult({
    tracks: types.includes('track') ? true : false,
    artists: types.includes('artist') ? true : false,
    albums: types.includes('album') ? true : false,
    playlists: types.includes('playlist') ? true : false
  })
}

const styles = {
  margin: {
    margin: '5px 10px'
  },
  toggleContainer: {
    display: 'inline-flex'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    height: '100vh',
    width: '200px',
    maxHeight: '100%',
    position: 'fixed',
  },
}

const renderToggles = (
  <div style={styles.toggleContainer}>
    <div style={styles.margin}>
      <Input type='checkbox' id='track-checkbox' /> Track
      <Input type='checkbox' id='artist-checkbox' /> Artist
    </div>
    <div style={styles.margin}>
      <Input type='checkbox' id='album-checkbox' /> Album
      <Input type='checkbox' id='playlist-checkbox' /> Playlist
    </div>
  </div>
)


export default (props) => (
  <Panel style={styles.paper} content={
    <form style={styles.form} onSubmit={(event) => search(event, props.setState.setShowResult, props.setState.setSearchResult)}>
      <Input type='number' id='limit' placeholder='result limit' style={styles.margin}/>
      <Input type='text' id='query' placeholder='search' style={styles.margin} />
      {renderToggles}
      <Button text='Submit' style={styles.margin} />
    </form>
  } />
)