import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { executeSearch } from '../../utils/fetch';

const getSearchTypes = () => {
  const types = []
  if(document.getElementById('track-checkbox').checked) types.push('track')
  if(document.getElementById('artist-checkbox').checked) types.push('artist')
  if(document.getElementById('album-checkbox').checked) types.push('album')
  if(document.getElementById('playlist-checkbox').checked) types.push('playlist')
  return types
}

const search = async (event, setState) => {
  event.preventDefault()
  const query = document.getElementById('search').value
  const types = getSearchTypes()
  let limit = document.getElementById('limit').value
  if(limit < 1 || limit > 50) limit=50
  const result = await executeSearch(query, types, limit)
  setState({
    showResult: {
      tracks: types.includes('track') ? true : false,
      artists: types.includes('artist') ? true : false,
      albums: types.includes('album') ? true : false,
      playlists: types.includes('playlist') ? true : false
    },
    result
  })
}

export default ({ setState }) => (
  <Card>
    <Form  onSubmit={(event) => search(event, setState)}>
      <Row>
        <Col sm={8} md={8} lg={8}>
          <Form.Control id='search' type='text' placeholder='search' autoComplete='off' />
          <Form.Control id='limit' type='number' placeholder='result limit (1-50)' autoComplete='off' />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <Form.Check type='switch' id='track-checkbox' label='Tracks' />
          <Form.Check type='switch' id='artist-checkbox' label='Artists' />
          <Form.Check type='switch' id='album-checkbox' label='Albums' />
          <Form.Check type='switch' id='playlist-checkbox' label='Playlists' />
        </Col>
      </Row>
      <Row style={{padding: '0px 15px'}}>
        <Button variant='primary' type='submit' block>Submit</Button>
      </Row>
    </Form>
  </Card>
)