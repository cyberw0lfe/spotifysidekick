import React from 'react'
import Panel from '../common/FixedPanel'
import Input from '../common/Input'
import Button from '../common/Button'
import { generateGenrePlaylist, generateArtistPlaylist } from '../../utils/fetch'
import './styles.css'

// const validateInput = (selectedGenres, name, limit) => {
//   let success = true
//   if(selectedGenres.length === 0 || selectedGenres.length > 5) {
//     alert('Select 1-5 seed genres')
//     success = false
//   }
//   if(limit < 1 || limit > 100) {
//     alert('Select a limit between 1-100 tracks')
//     success = false
//   }
//   if(name.length < 1) {
//     alert('Enter a non-empty name for the playlist')
//     success = false
//   }
//   return success
// }

// const generatePlaylist = async (setLoading, selectedGenres, setPlaylist) => {
//   const limit = document.getElementById('limit').value
//   const name = document.getElementById('playlist-name').value
//   const saveToggle = document.getElementById('save-toggle')

//   if(validateInput(selectedGenres, name, limit)){
//     setLoading(true)
//     const playlist = await generateGenrePlaylist(selectedGenres, name, limit, saveToggle.checked)
//     setPlaylist(playlist)
//     setLoading(false)
//   }
// }

export default (props) => (
  <Panel content={
    <form className='artist-playlist-form' onSubmit={() => {generateGenrePlaylist(props.seeds, )}}>
      <div>
        <input type='radio' name='type' value='genre' onClick={() => props.setPlaylistType('genre')} />Genre
        <input type='radio' name='type' value='artist' onClick={() => props.setPlaylistType('artist')} />Artist
      </div>
      <Input type='number' placeholder='track count' id='limit' />
      <Input type='text' placeholder='playlist name' id='playlist-name' />
      <div>
        <Input type='checkbox' id='save-toggle' /> Save Playlist?
      </div>
      <Button text='Submit' />
    </form>
  } />
)
