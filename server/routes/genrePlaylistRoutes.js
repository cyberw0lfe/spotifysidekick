const app = require('express')
const router = app.Router()
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')
const { getTrackUris } = require('../utils')


router.get('/genre-seeds', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const data = await spotifyApi.getAvailableGenreSeeds()
    spotifyApi.setAccessToken('')
    const genres = data.body
    res.send(genres)
  } catch(err) {
    console.log(`/get-genre-seeds ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

router.post('/generate-genre-playlist', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const options = {
      'seed_genres': req.body.genres,
      limit: req.body.limit
    }
    const data = await spotifyApi.getRecommendations(options)
    const uris = getTrackUris(data.body.tracks)

    let statusCode = data.statusCode
    if(req.body.save) {
      const playlistName = req.body.name
      const playlist = await spotifyApi.createPlaylist(req.spotifyId, playlistName, {'public': true})
      const addTracks = await spotifyApi.addTracksToPlaylist(playlist.body.id, uris)
      statusCode = addTracks.statusCode
    }

    spotifyApi.setAccessToken('')
    res.status(statusCode).send(data.body.tracks)
  } catch(err) {
    console.log(`/generate-genre-playlist ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router