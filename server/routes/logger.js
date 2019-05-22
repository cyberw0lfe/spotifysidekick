const app = require('express')
const { Timber } = require('@timberio/node')
const { withAuth } = require('../auth/middleware')
const router = app.Router()
const logger = new Timber(process.env.TIMBER_API_KEY, process.env.TIMBER_SRC_ID)

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

module.exports = {
  router,
  logger
}