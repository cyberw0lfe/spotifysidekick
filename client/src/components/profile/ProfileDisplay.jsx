import React from 'react'
import Card from '../common/Card'
import './styles.css'

const renderProfile = (profile) => (
  <div>
    <img src={profile.imgUrl} alt='img'/>
    <div className='profile-info'>
      <a href={profile.url} className='profile-header'>{profile.name}</a>
      {profile.email}
      <div/>
      {profile.followers} followers
    </div>
  </div>
)

export default (props) => (
  <Card content={renderProfile(props.profile)} />
)
