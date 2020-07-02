import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { tunableOptions, onSubmit } from './utils'
import tooltips from './tooltips.json'

const popover = (key) => (
  <Popover id={key}>
    <Popover.Title as='h3'>{key}</Popover.Title>
    <Popover.Content>
      {tooltips[key]}
    </Popover.Content>
  </Popover>
)

const renderOption = (attribute, optionGroup) => (
  <OverlayTrigger key={attribute} placement='auto' overlay={popover(attribute)} >
    <div>
      <Row>
        <Col sm={3} md={3} lg={3}>
            <div className='advanced-option-label'>
              <h5>
                {attribute}
              </h5>
            </div>
        </Col>
        { optionGroup() }
      </Row>
      <hr />
    </div>
  </OverlayTrigger>
)

const renderOptionGroup = (attribute, min, max, step, placeholder) => () => (
  tunableOptions.map(option => (
    <Col key={`${option}-${attribute}`} sm={3} md={3} lg={3}>
      {option}
      <Form.Control id={`${attribute}-${option}`} type='number' min={min} max={max} step={step} placeholder={placeholder} />  
    </Col>
  ))
)

const options = {
  acousticness: renderOptionGroup('acousticness', 0, 1, .01, '0.0 - 1.0'),
  danceability: renderOptionGroup('danceability', 0, 1, .01, '0.0 - 1.0'),
  duration_ms: renderOptionGroup('duration_ms', 0, 3600000, 1, '0 - 3600000'),
  energy: renderOptionGroup('energy', 0, 1, .01, '0.0 - 1.0'),
  instrumentalness: renderOptionGroup('instrumentalness', 0, 1, .01, '0.0 - 1.0'),
  key: renderOptionGroup('key', 0, 20, 1, '0 - 20???'),
  liveness: renderOptionGroup('liveness', 0, 1, .01, '0.0 - 1.0'),
  loudness: renderOptionGroup('loudness', -60, 0, 1, '-60db - 0db'),
  mode: renderOptionGroup('mode', 0, 1, 1, '0 or 1'),
  popularity: renderOptionGroup('popularity', 0, 100, 1, '0 - 100'),
  speechiness: renderOptionGroup('speechiness', 0, 1, .01, '0.0 - 1.0'),
  tempo: renderOptionGroup('tempo', 0, 200, .1, '0 - 300 (bpm)'),
  time_signature: renderOptionGroup('time_signature', 0, 64, 1, '0 - 64'),
  valence: renderOptionGroup('valence', 0, 1, .01, '0.0 - 1.0'),
}

export default ({state, setState}) => (
  <Card>
    <Form onSubmit={(event) => onSubmit(event, state, setState)}>
      {
        Object.keys(options).map(option => 
          renderOption(option, options[option])  
        )
      }
      <Col>
        <Button variant='primary' type='submit' block>Submit</Button>
      </Col>
    </Form>
  </Card>
)