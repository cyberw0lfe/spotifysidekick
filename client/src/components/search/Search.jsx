import React, { useState } from 'react'
import SearchResult from './SearchResults'
import SearchForm from './SearchForm'

const renderResults = (results) => (
  <div>
    <SearchResult type={'track'} results={results.tracks}/>
    <SearchResult type={'artist'} results={results.artists}/>
    <SearchResult type={'album'} results={results.albums}/>
    <SearchResult type={'playlist'} results={results.playlists}/>
  </div>
)

export default () => {
  const [showResult, setShowResult] = useState(false)
  const [searchResult, setSearchResult] = useState(null)
  
  return (
    <div>
      <SearchForm setState={{setShowResult, setSearchResult}}/>
      {showResult ? renderResults(searchResult) : <div/>}
    </div>
  )
}