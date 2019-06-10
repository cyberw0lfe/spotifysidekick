import React from 'react'
import cookie from 'js-cookie'
import './styles.css'
import './responsive.css'
import { logout } from '../../utils/fetch'

const logoutUser = async () => {
  await logout()
  cookie.set('authorized', false)
  cookie.remove('authorized')
}

const authHeader = (window.location.pathname === '/') ? <div/> : <a href='/' onClick={logoutUser}>Logout</a>

export default () => (
  <div id='header'>
    <a href='/profile'>Profile</a>
    <a href='/search'>Search</a>
    <a href='/generate'>Generate</a>
    {authHeader}
  </div>
)