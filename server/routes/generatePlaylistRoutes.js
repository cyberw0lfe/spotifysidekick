const app = require('express')
const router = app.Router()
const { withAuth } = require('../auth/middleware')
const spotifyApi = require('../spotifyClient.js')
const { getTrackUris } = require('../utils')

const getOptions = async ({playlistType, limit, seeds}) => {
  if(playlistType === 'genre') {
    return {
      'seed_genres': seeds,
      limit
    }
  } else {
    const artistIds = await getArtistIds(seeds)
    return Promise.all(artistIds).then(ids => {
      return {
        'seed_artists': ids,
        limit
      }
    })
  }
}

const getArtistIds = (seedArtists) => {
  return Promise.all(seedArtists.map(async seedArtist => {
    try {
      const response = await spotifyApi.searchArtists(seedArtist)
      const artist = await response.body.artists.items[0]
      return artist.id
    } catch(err) {
      console.log('getArtistIds ERROR: ', err)
    }
  })).then(ids => ids)
}

router.get('/genre-seeds', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const data = await spotifyApi.getAvailableGenreSeeds()
    spotifyApi.setAccessToken('')
    const genres = data.body
    res.send(genres)
  } catch(err) {
    console.log(`/genre-seeds ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

router.post('/generate-playlist', withAuth, async (req, res) => {
  try {
    spotifyApi.setAccessToken(req.apiToken)
    const options = await getOptions(req.body)
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
    console.log(`/generate-playlist ERROR: ${err}`)
    if(err.statusCode) res.sendStatus(err.statusCode)
    else res.sendStatus(500)
  }
})

module.exports = router