import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
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
  event.preventDefault()
  const query = document.getElementById('query').value
  const types = getSearchTypes()
  const limit = document.getElementById('limit').value
  const result = await executeSearch(query, types, limit)
  setSearchResult(result)
  setShowResult(true)
}

export default (props) => (
  <form onSubmit={(event) => search(event, props.setState.setShowResult, props.setState.setSearchResult)}>
    <Input type='number' id='limit' placeholder='result limit' />
    <Input type='text' id='query' placeholder='search' />
    <Button text='Submit' />
    
    <div className='search-types'>
      <div>
        <input type='checkbox' id='track-checkbox'></input> Track
      </div>
      <div>
        <input type='checkbox' id='artist-checkbox'></input> Artist
      </div>
      <div>
        <input type='checkbox' id='album-checkbox'></input> Album
      </div>
      <div>
        <input type='checkbox' id='playlist-checkbox'></input> Playlist
      </div>
    </div>
  </form>
)