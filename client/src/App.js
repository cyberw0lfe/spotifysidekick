import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css'
import Header from './components/header/Header'

const Login = lazy(() => import('./components/login/Login'))
const Token = lazy(() => import('./components/profile/Token'))
const Profile = lazy(() => import('./components/profile/Profile'))
const Search = lazy(() => import('./components/search/Search'))
const Discover = lazy(() => import('./components/discover/Discover'))
const GenrePlaylist = lazy(() => import('./components/genre-playlist/GenrePlaylist'))
const ArtistPlaylist = lazy(() => import('./components/artist-playlist/ArtistPlaylist'))
const Playground = lazy(() => import('./components/common/Playground'))

export default () => (
  <div className='app'>
    <Header />
    <div style={{padding: '50px 0px 0px 0px'}}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Login} />
          <Route path='/token' component={Token} />
          <Route path='/profile' component={Profile} />
          <Route path='/search' component={Search} />
          <Route path='/discover' component={Discover} />
          <Route path='/genre-playlist' component={GenrePlaylist} />
          <Route path='/artist-playlist' component={ArtistPlaylist} />
          <Route path='/playground' component={Playground} />
        </Suspense>
      </Router>
    </div>
  </div>
)
