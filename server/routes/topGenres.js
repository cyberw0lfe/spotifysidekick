const app = require('express')
const router = app.Router()
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')
const { getGenresFromList } = require('../utils')

router.get('/top-content', withAuth, async (req, res) => {
  try {
    // TODO: add timerange option here
    const options = {
      limit: 50
    }

    spotifyApi.setAccessToken(req.apiToken)
    const topArtists = await spotifyApi.getMyTopArtists(options)

    spotifyApi.setAccessToken(req.apiToken)
    const topTracks = await spotifyApi.getMyTopTracks(options)
    
    const genres = getGenresFromList(topArtists.body.items)
    spotifyApi.setAccessToken('')
    
    res.send({
      artists: topArtists.body.items,
      tracks: topTracks.body.items,
      genres
    })
  } catch(err) {
    console.log(`/top-genres ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router