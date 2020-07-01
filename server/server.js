const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const apiMocker = require('connect-api-mocker')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(cookieParser())

app.listen(port, () => console.log(`Listening on port ${port}`))

const isMock = process.argv[2] === 'mock'
if(isMock) app.use('/api', apiMocker('server/mocks/api'))

app.use('/api', require('./routes/authRoutes'))
app.use('/api', require('./routes/profile'))
app.use('/api', require('./routes/search'))
app.use('/api', require('./routes/topGenres'))
app.use('/api', require('./routes/generatePlaylistRoutes'))
app.use('/api', require('./routes/log'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'))
})