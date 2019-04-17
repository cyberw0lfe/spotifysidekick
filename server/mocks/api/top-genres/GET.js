const mockResponses = require('../../mockResponses')

module.exports = (req, res) => {
  res.send(mockResponses.topGenres)
}