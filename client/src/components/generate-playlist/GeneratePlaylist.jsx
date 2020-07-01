import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
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
      <Container>
        <Row>
          <Col>
            <PlaylistForm state={state} setState={setState} />
          </Col>
        </Row>
      </Container>
      <Container>
        { state.advanced && <AdvancedOptions state={state} setState={setState} /> }
      </Container>
      <Container>
        <ContentTabs state={state} setState={setState} />
      </Container>
    </div>
  ) 
}
