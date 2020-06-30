import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import PlaylistForm from './PlaylistForm'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'
import './styles.css'

const renderPlaylist = (playlist) => {
  return playlist && playlist.length > 0
    ? <Card>
        <ListGroup>
          {
            playlist.map(track => (
              <ListGroupItem key={track.name+track.artists[0].name}>
                {track.name} - {track.artists[0].name}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </Card>
    : <div />
}

const renderTabs = (state, setState) => (
  <Tabs id='seed-tabs' activeKey={state.playlistType} onSelect={(key) => setState({...state, playlistType: key, seeds: []})}>
    <Tab eventKey='artist' title='Artist'>
      <Card>
        <Row>
          <SeedArtistForm state={state} setState={setState} />
          <SelectedSeeds state={state} setState={setState} />
        </Row>
      </Card>
    </Tab>
    <Tab eventKey='genre' title='Genre'>
      <Card>
        <Row>
          <SeedGenres state={state} setState={setState} />
          <SelectedSeeds state={state} setState={setState} />
        </Row>
      </Card>
    </Tab>
    <Tab eventKey='playlist' title='Playlist' disabled={ state.playlist.length < 1}>
      <Card>
        <ListGroup>
          { 
            state.playlist.map(track => (
              <ListGroupItem key={track.name+track.artists[0].name}>
                {track.name} - {track.artists[0].name}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </Card>
    </Tab>
  </Tabs>
)

export default () => {
  const [state, setState] = useState({
    playlistType: 'artist',
    save: false,
    seeds: [],
    playlist: [],
  })
  // TODO: reorder seed form and selected seeds to be below
  //TODO: make seed genre height smaller
  //TODO: explore making genre/artist toggle tabs
  return temp(state, setState) 
  //  (
  //   <Container>
  //     <Row>
  //       <PlaylistForm state={state} setState={setState} />
  //       <SelectedSeeds state={state} setState={setState} />
  //     </Row>
  //     <Row className='seed-genre-container' >
  //       {
  //         state.playlistType === 'artist'
  //         ? <SeedArtistForm state={state} setState={setState} />
  //         : <SeedGenres state={state} setState={setState} />
  //       }
        
  //       { renderPlaylist(state.playlist) }
  //     </Row>
  //   </Container>
  // )
}

const temp = (state, setState) => (
  <div>
    <Container>
      <Row>
        <Col>
          <PlaylistForm state={state} setState={setState} />
        </Col>
      </Row>
    </Container>
    <Container>
      { renderTabs(state, setState) }
    </Container>
  </div>
)