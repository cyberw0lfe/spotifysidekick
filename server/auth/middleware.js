const { getTokenByUuid, deleteToken } = require('./redis')
const jwt = require('jsonwebtoken')
const config = require('../config')
const { secret, audience, issuer } = config.jwt

const validateJwt = (decoded) => {
  if(!decoded.aud === audience) return false
  if(!decoded.iss === issuer) return false
  if(!decoded.spotifyId.length > 0) return false
  return true
}

const getTokenFromReq = (req) => {
  return req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.cookies.token
}

const withAuth = (req, res, next) => {
  const token = getTokenFromReq(req)

  if (!token) {
    res.status(401).send('Unauthorized: No token provided')
  } else {
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token')
      } else {
        req.uuid = decoded.uuid
        req.spotifyId = decoded.spotifyId
        req.apiToken = await getTokenByUuid(decoded.uuid)
        
        if(validateJwt(decoded)) next()
        else res.status(401).send('Unauthorized: Id not valid')
      }
    })
  }
}

const logout = (req, res, next) => {
  const token = getTokenFromReq(req)

  if(!token) {
    req.send('No token provided, already logged out')
  } else {
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized logout: Invalid token')
      } else {
        deleteToken(decoded.uuid)
        console.log(`Logged out user: ${decoded.uuid}`)
        next()
      }
    })
  }
}

module.exports = { withAuth, logout }