import React, { useState, useEffect } from 'react'
import Spinner from '../common/Spinner'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { getTopContent } from '../../utils/fetch'

const popover = (
  <Popover>
    <Popover.Content>
      click to expand
    </Popover.Content>
  </Popover>
)

const genreListContent = genres => genres.map(genre => (
  <Row key={genre}>
    {genre}
  </Row>
))

const artistListContent = artists => artists.map(artist => (
  <Row key={artist.name}>
    <Col sm={4}>
      <Image src={artist.image.url} fluid />
    </Col>
    <Col sm={8}>
      <a href={artist.url}>
        { artist.name }
      </a>
    </Col>
  </Row>
))

const trackListContent = tracks => tracks.map(track => (
  <Row key={track.name}>
    <Col sm={4}>
      <Image src={track.image.url} fluid />
    </Col>
    <Col sm={8}>
      <a href={track.url}>
        { `${track.name} - ${track.artist.name}` }
      </a>
    </Col>
  </Row>
))

const renderContentList = (title, topContentList) => (
  <OverlayTrigger placement='auto' overlay={popover}>
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header}eventKey="0">
          {title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          {
            title === 'Top Genres'
              ? genreListContent(topContentList)
              : title === 'Top Artists'
                ? artistListContent(topContentList)
                : trackListContent(topContentList)
          }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </OverlayTrigger>
)

const renderTopContent = state => (
  <div>
    { renderContentList('Top Artists', state.artists) }
    { renderContentList('Top Tracks', state.tracks) }
    { renderContentList('Top Genres', state.genres) }
  </div>
)

const formatArtists = artists => artists.map(artist => ({
  name: artist.name,
  image: artist.images[0],
  popularity: artist.popularity,
  genres: artist.genres,
  followers: artist.followers.total,
  url: artist.external_urls.spotify
}))

const formatTracks = tracks => tracks.map(track => ({
  name: track.name,
  duration_ms: track.duration_ms,
  explicit: track.explicit,
  popularity: track.popularity,
  previewUrl: track.preview_url,
  image: track.album.images[0],
  releaseDate: track.album.release_date, 
  url: track.external_urls.spotify,
  artist: {
    name: track.artists[0].name,
    url: track.artists[0].external_urls.spotify
  },
  album: {
    name: track.album.name,
    url: track.album.external_urls.spotify
  }
}))

export default () => {
  const [state, setState] = useState({
    genres: [],
    artists: [],
    tracks: []
  })

  useEffect(() => {
    getTopContent()
      .then(content => {
        setState({
          genres: content.genres,
          artists: formatArtists(content.artists),
          tracks: formatTracks(content.tracks)
        })
      })
  }, [])

  return state.genres.length <= 0 
    ? <Spinner /> 
    : renderTopContent(state)
}