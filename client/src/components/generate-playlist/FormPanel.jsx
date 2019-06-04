import React from 'react'
import Paper from '../common/Paper'
import Input from '../common/Input'
import Button from '../common/Button'
import { generatePlaylist } from '../../utils/fetch'
import './styles.css'

const validateInput = (selectedGenres, name, limit) => {
  if(selectedGenres.length === 0 || selectedGenres.length > 5) {
    alert('Select 1-5 seed genres')
    return false
  }
  if(limit < 1 || limit > 100) {
    alert('Select a limit between 1-100 tracks')
    return false
  }
  if(name.length < 1) {
    alert('Enter a non-empty name for the playlist')
    return false
  }
  return true
}

const onSubmit = async (event, state, setState) => {
  event.preventDefault()
  const limit = document.getElementById('limit').value
  const name = document.getElementById('playlist-name').value
  const saveToggle = document.getElementById('save-toggle')

  if(validateInput(state.seeds, name, limit)){
    const playlist = await generatePlaylist(state.seeds, state.playlistType, name, limit, saveToggle.checked)
    setState({
      ...state,
      playlist
    })
  }
}

export default ({state, setState, className}) => (
  <Paper className={className} content={
    <form onSubmit={(event) => {onSubmit(event, state, setState)}}>
      <div>
        <input type='radio' name='type' value='genre' onClick={() => setState({...state, playlistType: 'genre'})} />Genre
        <input type='radio' name='type' value='artist' onClick={() => setState({...state, playlistType: 'artist'})} />Artist
      </div>
      <Input type='number' placeholder='track count' id='limit' autoComplete='off'/>
      <Input type='text' placeholder='playlist name' id='playlist-name' autoComplete='off'/>
      <div>
        <Input type='checkbox' id='save-toggle' /> Save Playlist?
      </div>
      <Button text='Submit' />
    </form>
  } />
)
