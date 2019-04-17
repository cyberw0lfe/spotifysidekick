const SpotifyWebApi = require('spotify-web-api-node')
const config = require('./config.js')

const spotifyApi = new SpotifyWebApi({
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  redirectUri: config.redirectUri
})

module.exports = spotifyApi