[![Build Status](https://travis-ci.org/adamtwolfe/spotify-dashboard.svg?branch=master)](https://travis-ci.org/adamtwolfe/spotify-dashboard)

# TODO
## Bugs
- multiple searches with different result types causes error

## Client
### General
- better documentation.. look into the thing Andric and I used
- make an error page

### Genre Playlist
- refactor state
- combine with artist playlist

### Artist Playlist 
- reuse genre playlist components
- refactor into multiple files
- combine with genre playlist

## Server
- env specific redirect uri -- have local env setup, need prod one
- redis connection for deployment
- flush redis every so often

## Devops
- snyk ci/cd
- [Custom Domain](https://devcenter.heroku.com/articles/custom-domains)
- figure out devDependencies with heroku (connect-api-mocker should be devDep)

## Styling
- CSS audit (inline vs imported style sheets)

# Ideas / Features
- Make playlist from top artists / related artists
- track newly released spotify playlists
- add more on discover

# Links
Source Code - [Github](https://github.com/adamtwolfe/spotify-dashboard)
Deploy - [Heroku](https://frozen-tor-75481.herokuapp.com/)
Build - [Travis CI](https://travis-ci.org/adamtwolfe/spotify-dashboard)