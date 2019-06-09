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

const authHeader = (window.location.pathname === '/') ? <div/> : <a href='/' className='col-1 col-s-1' onClick={logoutUser}>Logout</a>

export default () => (
  <div id='header'>
    <a href='/profile' className='col-1 col-s-1'>Profile</a>
    <a href='/search' className='col-1 col-s-1'>Search</a>
    <a href='/generate' className='col-1 col-s-1'>Generate</a>
    {authHeader}
  </div>
)