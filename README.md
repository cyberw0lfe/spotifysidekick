[![Build Status](https://travis-ci.org/adamtwolfe/spotify-dashboard.svg?branch=master)](https://travis-ci.org/adamtwolfe/spotify-dashboard)

# Local Setup
- run install script: `npm run install-modules`
- add `.env` file with values
  ```
  CLIENT_ID
  CLIENT_SECRET
  REDIRECT_URI
  STATE_KEY
  JWT_SECRET
  JWT_AUD
  JWT_ISS
  TIMBER_API_KEY
  TIMBER_SRC_ID
  REDIS_URL
  ```
- install redis locally
- start local redis instance
- start the server: `npm run server`
  - if successful, there should be a log line `Redis client connected`
- start the client: `npm run client`
- navigate to http://localhost:3000/