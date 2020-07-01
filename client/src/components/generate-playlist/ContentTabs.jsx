import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from 'react-bootstrap/Row'
import SeedGenres from './SeedGenres'
import SeedArtistForm from './SeedArtistForm'
import SelectedSeeds from './SelectedSeeds'

const getType = (key, currentType) => key === 'artist'
  ? 'artist'
  : key === 'genre'
    ? 'genre'
    : currentType

export default ({state, setState}) => (
  <Tabs id='seed-tabs' activeKey={state.activeTab} 
    onSelect={(key) => setState({...state, activeTab: key, playlistType: getType(key, state.playlistType)})}>
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