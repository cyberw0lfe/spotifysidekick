const app = require('express')
const router = app.Router()
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')
const { getTrackUris } = require('../utils')

const getArtistIds = (seedArtists) => {
  return seedArtists.map(async seedArtist => {
    try {
      const response = await spotifyApi.searchArtists(seedArtist)
      const artist = await response.body.artists.items[0]
      return artist.id
    } catch(err) {
      console.log('getArtistIds ERROR: ', err)
    }
  })
}

router.post('/generate-artist-playlist', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const artistIds = await getArtistIds(req.body.artists)
    
    Promise.all(artistIds).then(async ids => {
      console.log('artist id array: ', ids)
      const options = {
        'seed_artists': ids,
        limit: req.body.limit
      }
      try {
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
      } catch(err) {console.log(err) }
    })
  } catch(err) {
    console.log(`/generate-artist-playlist ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router