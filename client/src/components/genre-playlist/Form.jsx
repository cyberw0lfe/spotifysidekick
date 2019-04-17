import React from 'react'
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

export default (props) => (
  <form className='genre-playlist-form' onSubmit={() => {generatePlaylist(props.setLoading, props.selectedGenres, props.setPlaylist)}}>
    <input type='number' id='limit' name='limit' placeholder='track count'></input>
    <input type='text' id='playlist-name' name='playlist-name' placeholder='playlist name'></input>
    <div className='save-playlist'>
      <input type='checkbox' id='save-toggle' name='save-toggle'></input>
      Save Playlist?
    </div>
    <button type='submit'>Submit</button>
  </form>
)