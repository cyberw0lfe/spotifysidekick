const app = require('express')
const router = app.Router()
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')

router.post('/search', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const query = req.body.query
    const types = req.body.types
    const limit = req.body.limit
    const options = {limit}
    const data = await spotifyApi.search(query, types, options)
    const result = data.body
    spotifyApi.setAccessToken('')
    res.send(result)
  } catch(err) {
    console.log(`/search ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router