import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const renderTab = (resultType, results) => (
  <Tab eventKey={resultType} title={resultType}>
    <ListGroup>
      {
        results.map(result => <ListGroupItem key={result.id}>{result.name}</ListGroupItem>)
      }
    </ListGroup>
  </Tab>
)

export default ({results, showResult}) => (
  <Tabs id='results-tabs'>
    { showResult.tracks && renderTab('Tracks', results.tracks.items) }
    { showResult.artists && renderTab('Artists', results.artists.items) }
    { showResult.albums && renderTab('Albums', results.albums.items) }
    { showResult.playlists && renderTab('Playlists', results.playlists.items) }
  </Tabs>
)