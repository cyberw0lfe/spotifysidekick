import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { generatePlaylist } from '../../utils/fetch'
import './styles.css'

const validateInput = (selectedGenres, name, limit, saveToggle) => {
  if(selectedGenres.length === 0 || selectedGenres.length > 5) {
    alert('Select 1-5 seeds')
    return false
  }
  if(limit < 1 || limit > 100) {
    alert('Select a limit between 1-100 tracks')
    return false
  }
  if(saveToggle && name.length < 1) {
    alert(saveToggle)
    alert('Enter a non-empty name for the playlist')
    return false
  }
  return true
}

const onSubmit = async (event, state, setState) => {
  event.preventDefault()
  let limit = document.getElementById('limit').value
  if(limit < 1 || limit > 100) limit=50
  const name = document.getElementById('playlist-name').value
  const saveToggle = document.getElementById('save-toggle').checked

  if(validateInput(state.seeds, name, limit, saveToggle)){
    const playlist = await generatePlaylist(state.seeds, state.playlistType, name, limit, saveToggle)
    setState({
      ...state,
      playlist,
      playlistType: 'playlist'
    })
  }
}

const switchToggle = {
  false: 'don\'t save',
  true: 'save'
}

export default ({state, setState}) => (
  <Card>
    <Form onSubmit={(event) => onSubmit(event, state, setState)}>
      <Row>
        <Col>
          <Form.Control id='playlist-name' type='text' placeholder='playlist name' autoComplete='off' />
          <Form.Control id='limit' type='number' placeholder='track count' />
          <Form.Check type='switch' id='save-toggle' label={switchToggle[JSON.stringify(state.save)]}
            onClick={() => setState({...state, save: !state.save})}
          />
          <Button variant='primary' type='submit' block>Submit</Button>
        </Col>
      </Row>
    </Form>
  </Card>
)
