import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const addArtist = (event, state, setState) => {
  event.preventDefault()
  const seed = document.getElementById('seed-artist').value
  if(state.seeds.includes(seed)) {
    alert(`'${seed}' is already a seed`)
  } else {
    setState({
      ...state,
      seeds: [...state.seeds, seed]
    })
  }
  document.getElementById('seed-artist').value = ''
}

export default ({state, setState}) => (
  <Card className='tab-card'>
    <Form onSubmit={(event) => addArtist(event, state, setState)}>
      <Row>
        <Col>
          <Form.Control id='seed-artist' type='text' placeholder='seed artist' autoComplete='off' />
          <Button variant='primary' type='submit' block>Add</Button>
        </Col>
      </Row>
    </Form>
  </Card>
)
