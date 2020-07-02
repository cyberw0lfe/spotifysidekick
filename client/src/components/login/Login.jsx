import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { getLoginUrl } from '../../utils/fetch'
import './styles.css'
 
const clickHandler = async () => {
  const result = await getLoginUrl()
  window.location.replace(result.authorizeUrl)
}

export default () => (
  <Container>
    <Alert key='login-text' variant='primary'>
      <p>Click the button below to begin. You will be redirected to Spotify to enter your credentials</p>
    </Alert>
    <Alert key='login-warning' variant='warning'>
      <p>
        You should <b><i>never</i></b> enter your password directly on this site or any site that isn't Spotify
      </p>
    </Alert>
    <Button variant='primary' block onClick={clickHandler}>Login</Button>
  </Container>
)
