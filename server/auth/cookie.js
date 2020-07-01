const jwt = require('jsonwebtoken')
const uuidv4 = require('uuid/v4')
const { saveToken, deleteToken } = require('./redis')
const { logger, payloads} = require('../logger')
const config = require('../config')
const { secret, audience, issuer } = config.jwt

const issueCookie = (spotifyId, apiToken) => {
  const uuid = uuidv4()
  const payload = { uuid, spotifyId }
  const options = {
    expiresIn: '1h',
    audience,
    issuer
  }
  const token = jwt.sign(payload, secret, options)
  saveToken(uuid, apiToken)

  console.log(`Saved user: ${uuid}`)
  const saveJwtEvent = payloads.saveJwt
  saveJwtEvent.uuid = uuid
  // logger.info(saveJwtEvent)
  
  return token
}

const invalidateCookie = (req, res, next) => {
  const token = req.cookies.token
  if(token && token !== 'logged out') {
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.log('Delete Token ERROR: ', err)
      } else {
        deleteToken(decoded.uuid)
        console.log(`Deleted user: ${decoded.uuid}`)
        const deleteJwtEvent = payloads.deleteJwt
        deleteJwtEvent.uuid = decoded.uuid
        // logger.info(deleteJwtEvent)
      }
    })
  } else console.log('No cookie to invalidate')
  next()
}

module.exports = { invalidateCookie, issueCookie }