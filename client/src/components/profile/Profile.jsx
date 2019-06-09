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

const style = {
  // margin: '20px 0px 20px 10px',
  // width: 'min-content'
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
    <div className='row'>
      <div style={{textAlign: 'center'}}>
        {
          profile 
            ? <Paper className='col-4 col-s-12' content={renderProfile(profile)} style={style} />
            : <div>Loading...</div>}
      </div>
      <TopGenres className='col-8 col-s-12'/>
    </div>
  )
}