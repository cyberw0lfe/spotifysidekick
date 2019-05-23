import React from 'react'
import Panel from '../common/FixedPanel'
import Input from '../common/Input'
import Button from '../common/Button'
import './styles.css'

export default (props) => (
  <Panel content={
    <form id='artist-playlist-form'>
      <div>
        <input type='radio' name='type' value='genre' checked/>Genre
        <input type='radio' name='type' value='playlist' />Playlist
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
