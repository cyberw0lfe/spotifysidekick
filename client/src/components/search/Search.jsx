import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import SearchForm from './SearchForm'
import ResultTabs from './ResultTabs'
import './styles.css'

export default () => {
  const [state, setState] = useState({
    showResult: {
      tracks: false,
      artists: false,
      albums: false,
      playlists: false
    },
    result: null
  })

  return (
    <div>
      <Container className='info-container'>
        <Alert key='search-text' variant='primary'>
          <h1>Search</h1>
          <p>
            Search for tracks, artists, albums and playlists
          </p>
        </Alert>
      </Container>
      <Container className='form-container'>
        <SearchForm state={state} setState={setState} />
      </Container>
      <Container>
        { state.result 
          ? <ResultTabs results={state.result} showResult={state.showResult} /> 
          : <div/>
        }
      </Container>
    </div>
  )
}