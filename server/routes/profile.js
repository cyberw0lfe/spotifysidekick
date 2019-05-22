const app = require('express')
const router = app.Router()
const get = require('lodash.get')
const logger = require('./logger').logger
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')

const payload = {
  level: 'info',
  event: 'login',
  route: '/api/profile',
  email: '',
  timestamp: Date.now()
}

router.get('/profile', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const result = await spotifyApi.getMe()
    const body = result.body
    const profile = {
      id: get(body, 'id', 'undef'),
      name: get(body, 'display_name', 'undef'),
      email: get(body, 'email', 'undef'),
      url: get(body, 'external_urls.spotify', 'undef'),
      followers: get(body, 'followers.total', 'undef'),
      imgUrl: get(body, 'images[0].url', 'undef'),
      country: get(body, 'country', 'undef')
    }

    payload.email = profile.email
    logger.info(payload)

    spotifyApi.setAccessToken('')
    res.send(profile)
  } catch(err) {
    console.log(`/profile ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router