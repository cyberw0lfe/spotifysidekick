const mockResponses = require('../../mockResponses')

module.exports = (req, res) => {
  res.status(201).send(mockResponses.generateGenrePlaylist)
}