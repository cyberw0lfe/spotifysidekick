import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default ({ name }) => (
  <Jumbotron fluid>
    <Container>
      <h1>Welcome, {name}</h1>
      <p>
        Explore your Spotify profile and listening habits below
      </p>
    </Container>
  </Jumbotron>
)