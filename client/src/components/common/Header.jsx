import React from 'react'
import cookie from 'js-cookie'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { logout } from '../../utils/fetch'
import './styles.css'

const logoutUser = async () => {
  await logout()
  cookie.set('authorized', false, {sameSite: 'strict'})
  window.location.href = '/'
}

const authenticatedLinks = (window.location.pathname === '/')
  ? <div/>
  : (
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='/profile'>Profile</Nav.Link>
        <Nav.Link href='/search'>Search</Nav.Link>
        <Nav.Link href='/generate'>Generate</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className='logout' onClick={logoutUser}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  )

export default () => (
  <Navbar collapseOnSelect expand='sm' fixed='top' bg='dark' variant='dark'>
    <Navbar.Brand href='/profile'>Spotify Sidekick</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    {authenticatedLinks}
  </Navbar>
)