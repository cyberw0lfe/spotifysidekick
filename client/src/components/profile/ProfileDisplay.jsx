import React from 'react'
import './styles.css'

export default (props) => {
  const profile = props.profile
  return (
    <div className='profile-container'>
      <img src={profile.imgUrl} alt='img' className='profile-img'/>
      <div className='profile-info'>
        <a href={profile.url} className='profile-header'>{profile.name}</a>
        {profile.email}
        <div/>
        {profile.followers} followers
      </div>
    </div>
  )
}
