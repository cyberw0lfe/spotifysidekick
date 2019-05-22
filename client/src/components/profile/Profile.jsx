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
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    fetchProfile()
      .then(fetchedProfile => {
        setProfile(fetchedProfile)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
      {loading ? <div>Loading...</div> : <Paper content={renderProfile(profile)} style={style} />}
    </div>
  )
}