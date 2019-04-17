const app = require('express')
const router = app.Router()
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')
const { getGenresFromList } = require('../utils')

router.get('/top-genres', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const artistData = await spotifyApi.getMyTopArtists()
    const data = artistData.body.items
    const genres = getGenresFromList(data)

    spotifyApi.setAccessToken('')
    const result = genres
    res.send(result)
  } catch(err) {
    console.log(`/top-genres ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router