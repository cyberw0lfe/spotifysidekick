import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ profile }) => (
  <Card className='user-card'>
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