import React, { useState } from 'react'
import Card from '../common/Card'
import SearchForm from './SearchForm'

const styles = {
  card: {
    margin: '10px 10px',
  },
  result: {
    padding: '2px 5px'
  }
}

const getResults = (results) => {
  return results.items.map(result => {
    return <div style={styles.result}>{result.name}</div>
  })
}

const renderResults = (results, showResult) => (
  <div id='search-results'>
    {showResult.tracks ? <Card style={styles.card} title='Tracks' content={getResults(results.tracks)} /> : <div/>}
    {showResult.artists ? <Card style={styles.card} title='Artists' content={getResults(results.artists)} /> : <div/>}
    {showResult.albums ? <Card style={styles.card} title='Albums' content={getResults(results.albums)} /> : <div/>}
    {showResult.playlists ? <Card style={styles.card} title='Playlists' content={getResults(results.playlists)} /> : <div/>}
  </div>
)

export default () => {
  const [showResult, setShowResult] = useState({
    tracks: false,
    artists: false,
    albums: false,
    playlists: false
  })
  const [searchResult, setSearchResult] = useState(null)
  
  return (
    <div id='playlist-container' style={{display: 'flex'}}>
      <SearchForm setState={{setShowResult, setSearchResult}}/>
      {showResult ? renderResults(searchResult, showResult) : <div/>}
    </div>
  )
}