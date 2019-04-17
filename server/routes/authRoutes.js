const app = require('express')
const router = app.Router()
const get = require('lodash.get')
const spotifyApi = require('../spotifyClient')
const config = require('../config')
const { invalidateCookie, issueCookie } = require('../auth/cookie')
const { logout } = require('../auth/middleware')

const getSpotifyId = async (token) => {
  spotifyApi.setAccessToken(token)
  const result = await spotifyApi.getMe()
  const body = result.body
  spotifyApi.setAccessToken('')
  return get(body, 'id', 'undef')
}

router.get('/login', invalidateCookie, (req, res) => {
  const authorizeUrl = spotifyApi.createAuthorizeURL(config.scopes, config.state)
  res.send({authorizeUrl})
})

router.post('/set-token', invalidateCookie, async (req, res) => {
  try {
    const data = await spotifyApi.authorizationCodeGrant(req.body.token)
    console.log('The token expires in ' + data.body['expires_in'])

    const token = data.body['access_token']
    const spotifyId = await getSpotifyId(token)
    const cookie = issueCookie(spotifyId, token)
    res.cookie('token', cookie, { httpOnly: true }).sendStatus(200)
  } catch(err) {
    console.log(`/set_token ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

router.get('/logout', logout, async (req, res) => {
  res.cookie('token', 'logged out', { httpOnly: true }).sendStatus(200)
})

module.exports = router