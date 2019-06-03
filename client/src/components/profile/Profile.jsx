import React, { useState, useEffect } from 'react'
import Paper from '../common/Paper'
import { fetchProfile } from '../../utils/fetch'
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

const style = {
  margin: '20px', 
  width: 'min-content'
}

export default () => {
  const [profile, setProfile] = useState(false)
  
  useEffect(() => {
    fetchProfile()
      .then(fetchedProfile => {
        setProfile(fetchedProfile)
      })
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
      {profile ? <Paper content={renderProfile(profile)} style={style} /> : <div>Loading...</div>}
    </div>
  )
}