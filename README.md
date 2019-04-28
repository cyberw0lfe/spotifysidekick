[![Build Status](https://travis-ci.com/adamtwolfe/spotify.svg?token=2txtSqzFNyGWxtK6gzgr&branch=master)](https://travis-ci.com/adamtwolfe/spotify)

# TODO
## Bugs
- multiple searches with different result types causes error
## Client
### General
- better documentation.. look into the thing Andric and I used

### Genre Playlist
- refactor state

### Artist Playlist
- reuse genre playlist components
- refactor into multiple files

## Server
- env specific redirect uri -- have local env setup, need prod one
- redis connection for deployment
- flush redis every so often

## Devops
- Travis CI (when public)
- snyk ci/cd (when public)
- [Custom Domain](https://devcenter.heroku.com/articles/custom-domains) (when public)
- figure out devDependencies with heroku (connect-api-mocker should be devDep) (when public)

## Styling
- CSS audit (inline vs imported style sheets)

# Ideas / Features
- Make playlist from top artists / related artists
- track newly released spotify playlists
- add more on discover

# High Level Arch Overview
Source Code
- [Bitbucket](https://bitbucket.org/adamtwolfe/spotify/src/master/)
- [Github](https://github.com/adamtwolfe/spotify)
Client - ejected `create-react-app`
Server - `express` server that serves up client files
Mock Server - mocked out responses from express API using `connect-api-mocker`
Deploy - [Heroku](https://frozen-tor-75481.herokuapp.com/)
Build - [Travis CI](https://travis-ci.com/adamtwolfe/spotify)