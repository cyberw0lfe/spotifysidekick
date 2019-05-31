import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css'
import Header from './components/common/Header'

const Login = lazy(() => import('./components/login/Login'))
const Token = lazy(() => import('./components/login/Token'))
const Profile = lazy(() => import('./components/profile/Profile'))
const Search = lazy(() => import('./components/search/Search'))
const Discover = lazy(() => import('./components/discover/Discover'))
const GeneratePlaylist = lazy(() => import('./components/generate-playlist/GeneratePlaylist'))
const Playground = lazy(() => import('./components/common/Playground'))

export default () => (
  <div className='app'>
    <Header />
    <div id='body-container' style={{padding: '50px 0px 0px 0px'}}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Login} />
          <Route path='/token' component={Token} />
          <Route path='/profile' component={Profile} />
          <Route path='/search' component={Search} />
          <Route path='/discover' component={Discover} />
          <Route path='/generate-playlist' component={GeneratePlaylist} />
          <Route path='/playground' component={Playground} />
        </Suspense>
      </Router>
    </div>
  </div>
)
