import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import SearchForm from './SearchForm'
import './styles.css'

const renderTab = (resultType, results) => (
  <Tab eventKey={resultType} title={resultType}>
    <ListGroup>
      {
        results.map(result => <ListGroupItem key={result.id}>{result.name}</ListGroupItem>)
      }
    </ListGroup>
  </Tab>
)

const renderTabs = (results, showResult) => (
  <Tabs id='results-tabs'>
      { showResult.tracks && renderTab('Tracks', results.tracks.items) }
      { showResult.artists && renderTab('Artists', results.artists.items) }
      { showResult.albums && renderTab('Albums', results.albums.items) }
      { showResult.playlists && renderTab('Playlists', results.playlists.items) }
  </Tabs>
)

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
      <Container>
        <Row>
          <Col>
            <SearchForm state={state} setState={setState} />
          </Col>
        </Row>
      </Container>
      <Container style={{maxWidth: '400px'}}>
        { state.result ? renderTabs(state.result, state.showResult) : <div/> }
      </Container>
    </div>
  )
}