const getGenresFromList = items => {
  //array.map.filter
  const genres = []
  items.forEach(item => {
    item.genres.forEach(genre => {
      if(!genres.includes(genre)) genres.push(genre)
    })
  })
  return genres
}

const getTrackUris = tracks => {
  return tracks.map(track => {
    return track.uri
  })
}

module.exports = {getGenresFromList, getTrackUris}