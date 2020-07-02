import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { onSubmit } from './utils'
import './styles.css'

const toggles = {
  advancedOptions: {
    false: 'basic options',
    true: 'advanced options'
  },
  save: {
    false: 'don\'t save',
    true: 'save'
  }
}

const popover = (
  <Popover>
    <Popover.Content>
      default 50 if blank
    </Popover.Content>
  </Popover>
)

export default ({state, setState}) => (
  <Card>
    <Form onSubmit={(event) => onSubmit(event, state, setState)}>
      <Row>
        <Col>
          <Form.Control id='playlist-name' type='text' placeholder='playlist name' autoComplete='off' />
          <OverlayTrigger placement='auto' overlay={popover}>
            <Form.Control id='limit' type='number' min='1' max='100' placeholder='track count (1-100)' />
          </OverlayTrigger>
          <Form.Check type='switch' id='save-toggle' label={toggles.save[JSON.stringify(state.save)]}
            onClick={() => setState({...state, save: !state.save})}
          />
          <Form.Check type='switch' id='advanced-options' label={toggles.advancedOptions[JSON.stringify(state.advanced)]}
            onClick={() => setState({...state, advanced: !state.advanced})}
          />
          <Button variant='primary' type='submit' block>Submit</Button>
        </Col>
      </Row>
    </Form>
  </Card>
)
