import React, { useState, useEffect } from 'react'
import Spinner from '../common/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import TopGenres from './TopGenres'
import { fetchProfile } from '../../utils/fetch'

const renderWelcomeContent = name => (
  <Jumbotron fluid>
    <Container>
      <h1>Welcome, {name}!</h1>
      <p>
        View your Spotify profile and information about your listening habits below
      </p>
    </Container>
  </Jumbotron>
)

const renderProfile = profile => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src={profile.imgUrl} />
    <Card.Body>
      <Card.Title>{profile.name}</Card.Title>
      <Card.Text>
      {profile.email}
      <br/>
      {profile.followers} followers
      <br/>
      </Card.Text>
      <Card.Link href={profile.url}>Spotify Account</Card.Link>
    </Card.Body>
  </Card>
)

export default () => {
  const [profile, setProfile] = useState(false)
  
  useEffect(() => {
    fetchProfile()
      .then(fetchedProfile => {
        setProfile(fetchedProfile)
      })
  }, [])

  return (
    <div>
      <div>
        {
          profile.name
            ? renderWelcomeContent(profile.name)
            : <Spinner />
        }
      </div>

      <Container>
        <Row>
          <Col sm={12} md={6}>
            {
              profile
                ? renderProfile(profile)
                : <Spinner />
            }
          </Col>
          <Col sm={12} md={6}>
            <TopGenres />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
