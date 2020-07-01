import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css'
import Header from './components/common/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = lazy(() => import('./components/login/Login'))
const Token = lazy(() => import('./components/login/Token'))
const Profile = lazy(() => import('./components/profile/Profile'))
const Search = lazy(() => import('./components/search/Search'))
const GeneratePlaylist = lazy(() => import('./components/generate-playlist/GeneratePlaylist'))

export default () => (
  <div className='app'>
    <Header />
    <div style={{padding: '56px 0px 0px 0px'}}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Login} />
          <Route path='/token' component={Token} />
          <Route path='/profile' component={Profile} />
          <Route path='/search' component={Search} />
          <Route path='/generate' component={GeneratePlaylist} />
        </Suspense>
      </Router>
    </div>
  </div>
)
