// require('dotenv').config()

module.exports = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    stateKey: process.env.STATE_KEY,
    scopes: ['user-read-private', 'user-read-email', 'user-top-read',
        'playlist-read-collaborative', 'user-library-read',
        'playlist-modify-public', 'playlist-modify-private'],
    jwt: {
        secret: process.env.JWT_SECRET,
        audience: process.env.JWT_AUD,
        issuer: process.env.JWT_ISS,
    }
}
// TODO make this stuff secret / env specific
// https://developer.spotify.com/documentation/general/guides/scopes