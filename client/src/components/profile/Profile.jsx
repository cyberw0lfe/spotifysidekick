import React, { useState, useEffect } from 'react'
import TopGenres from './TopGenres'
import Paper from '../common/Paper'
import { fetchProfile } from '../../utils/fetch'
import './styles.css'
import '../common/responsive.css'

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

export default () => {
  const [profile, setProfile] = useState(false)
  
  useEffect(() => {
    fetchProfile()
      .then(fetchedProfile => {
        setProfile(fetchedProfile)
      })
  }, [])

  return (
    <div className='row'>
      <div style={{textAlign: 'center'}}>
        {
          profile 
            ? <Paper className='col-4 col-s-6' content={renderProfile(profile)}/>
            : <div>Loading...</div>}
      </div>
      <TopGenres className='col-8 col-s-6'/>
    </div>
  )
}