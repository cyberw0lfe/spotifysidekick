const app = require('express')
const logger = require('../logger')
const { withAuth } = require('../auth/middleware')
const router = app.Router()

const logMap = () => ({
  info: (message) => {logger.info(message)},
  warning: (message) => {logger.warning(message)},
  error: (message) => {logger.error(message)},
})

router.post('/log', withAuth, (req, res) => {
  const level = req.body.level || 'info'
  const log = logMap()
  console.log(JSON.stringify(req.body))
  try {
    log[level](req.body) // TODO: ramda
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
  
})

module.exports = router