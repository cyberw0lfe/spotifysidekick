import React, { useState, useEffect } from 'react'
import Spinner from '../common/Spinner'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { getTopGenres } from '../../utils/fetch'

const renderGenres = genres => (
  <Accordion>
    <Card>
      <Accordion.Toggle as={Card.Header}eventKey="0">
        Top Genres
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
        {
          genres.map(genre => <p key={genre}>{genre}</p>)
        }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)

export default () => {
  const [topGenres, setTopGenres] = useState([])

  useEffect(() => {
    getTopGenres()
      .then(genres => {
        setTopGenres(genres)
      })
  }, [])

  return topGenres.length <= 0 ? <Spinner /> : renderGenres(topGenres)
}