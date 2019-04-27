import React from 'react'
import Paper from '../common/Paper'
import Button from '../common/Button'
import Input from '../common/Input'
import './styles.css'
import { generateGenrePlaylist } from '../../utils/fetch'

const validateInput = (selectedGenres, name, limit) => {
  let success = true
  if(selectedGenres.length === 0 || selectedGenres.length > 5) {
    alert('Select 1-5 seed genres')
    success = false
  }
  if(limit < 1 || limit > 100) {
    alert('Select a limit between 1-100 tracks')
    success = false
  }
  if(name.length < 1) {
    alert('Enter a non-empty name for the playlist')
    success = false
  }
  return success
}

const generatePlaylist = async (setLoading, selectedGenres, setPlaylist) => {
  const limit = document.getElementById('limit').value
  const name = document.getElementById('playlist-name').value
  const saveToggle = document.getElementById('save-toggle')

  if(validateInput(selectedGenres, name, limit)){
    setLoading(true)
    const playlist = await generateGenrePlaylist(selectedGenres, name, limit, saveToggle.checked)
    setPlaylist(playlist)
    setLoading(false)
  }
}

const styles = {
  paper: {
    height: '100vh',
    width: '200px',
    position: 'fixed'
  }
}

export default (props) => (
  <Paper style={styles.paper} content={
    <form className='genre-playlist-form' onSubmit={() => {generatePlaylist(props.setLoading, props.selectedGenres, props.setPlaylist)}}>
      <Input type='number' id='limit' placeholder='track count' />
      <Input type='text' id='playlist-name' placeholder='playlist name' />
      <div className='save-playlist'>
        <Input type='checkbox' id='save-toggle' />
        Save Playlist?
      </div>
      <Button text='Submit' />
    </form>
  } />
)