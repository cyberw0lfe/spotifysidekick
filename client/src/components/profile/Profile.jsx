import React, { useState, useEffect } from 'react'
import ProfileDisplay from './ProfileDisplay'
import { fetchProfile } from '../../utils/fetch';

export default () => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    fetchProfile()
      .then(fetchedProfile => {
        setProfile(fetchedProfile)
        setLoading(false)
      })
  }, [loading])

  return loading ? <div className='profile-container'>Loading...</div> : <ProfileDisplay profile={profile} />
}