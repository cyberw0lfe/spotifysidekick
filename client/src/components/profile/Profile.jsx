import React, { useState, useEffect } from 'react'
import Spinner from '../common/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WelcomeBanner from './WelcomeBanner'
import UserCard from './UserCard'
import TopGenres from './TopGenres'
import { fetchProfile } from '../../utils/fetch'
import './styles.css'

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
        {
          profile.name
            ? <WelcomeBanner name={profile.name}/>
            : <Spinner />
        }

      <Container>
        <Row>
          <Col sm={12} md={6}>
            {
              profile
                ? <UserCard profile={profile} />
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
