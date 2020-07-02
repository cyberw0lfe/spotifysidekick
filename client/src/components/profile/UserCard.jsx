import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ profile }) => (
  <Card className='user-card'>
    <Card.Img variant='top' src={profile.imgUrl} />
    <Card.Body>
      <Card.Title>{profile.name}</Card.Title>
      <Card.Text>
        <p>{profile.email}</p>
        <p>{profile.followers} followers</p>
      </Card.Text>
      <Card.Link href={profile.url}>Spotify Account</Card.Link>
    </Card.Body>
  </Card>
)