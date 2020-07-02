import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlaylistForm from './PlaylistForm'
import AdvancedOptions from './AdvancedOptions'
import ContentTabs from './ContentTabs'
import './styles.css'

export default () => {
  const [state, setState] = useState({
    playlistType: 'artist',
    activeTab: 'artist',
    save: false,
    advanced: false,
    seeds: [],
    playlist: []
  })

  return (
    <div>
      <Container className='info-container'>
        <Alert key='search-text' variant='primary'>
          <h1>Generate playlists</h1>
          <p>Generate playlists by selecting up to 5 seed artists or pre-selected genres</p>
          <p>Customize results for any occasion using the advanced options panel</p>
          <p>Save playlists directly to your Spotify account</p>
        </Alert>
      </Container>
      <Container>
        <Row>
          <Col className='form-container' sm={12} md={6} lg={6}>
            <PlaylistForm state={state} setState={setState} />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <ContentTabs state={state} setState={setState} />
          </Col>
        </Row>
      </Container>
      <Container>
        { state.advanced && <AdvancedOptions state={state} setState={setState} /> }
      </Container>
    </div>
  ) 
}
