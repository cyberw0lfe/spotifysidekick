const mockResponses = require('../../mockResponses')

module.exports = (req, res) => {
  res.send({authorizeUrl: mockResponses.authorizeUrl})
}