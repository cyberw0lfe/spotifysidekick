const { Timber } = require('@timberio/node')
const logger = new Timber(process.env.TIMBER_API_KEY, process.env.TIMBER_SRC_ID)
// const logger = () => {}

const payloads = {
  login: {
    level: 'info',
    event: 'login',
    email: '',
    timestamp: Date.now()
  },
  saveJwt: {
    level: 'info',
    event: 'saveJwt',
    uuid: '',
    timestamp: Date.now()
  },
  deleteJwt: {
    level: 'info',
    event: 'deleteJwt',
    uuid: '',
    timestamp: Date.now()
  },
}

module.exports = { logger, payloads }