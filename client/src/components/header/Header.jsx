import React from 'react'
import cookie from 'js-cookie'
import './styles.css'
import { logout } from '../../utils/fetch'

const isLoggedIn = () => {
  const authorized = cookie.get('authorized')
  return authorized ? true : false
}

const logoutUser = async () => {
  await logout()
  cookie.set('authorized', false)
  cookie.remove('authorized')
}

const authHeader = isLoggedIn() ? <a href='/' onClick={logoutUser}>Logout</a> : <a href='/'>Login</a>

export default () => (
  <div className='header'>
    {authHeader}
    <a href='/profile'>Profile</a>
    <a href='/search'>Search</a>
    <a href='/discover'>Discover</a>
    <a href='/genre-playlist'>Genre Playlist</a>
    <a href='/artist-playlist'>Artist Playlist</a>
  </div>
)