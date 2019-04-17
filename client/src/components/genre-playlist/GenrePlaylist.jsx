import React, { useState, useEffect } from 'react'
import './styles.css'
import GenreSelector from './GenreSelector'
import Form from './Form'
import PlaylistDisplay from './PlaylistDisplay'
import { getGenreSeeds } from '../../utils/fetch'

export default () => {
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    getGenreSeeds()
      .then(result => {
        setGenres(result.genres)
        setLoading(false)
      })
  }, [])

  const unselectGenre = (genre) => {
    const newState = [...selectedGenres]
    newState.splice(newState.indexOf(genre), 1)
    setSelectedGenres(newState)
  }

  const resetState = () => {
    setSelectedGenres([])
    setPlaylist([])
  }

  if(loading) return <div>Loading...</div>
  if(playlist.length > 0) return <PlaylistDisplay playlist={playlist} onClick={resetState}/>

  return (
    <div className='genre-playlist-container'>
      <div>
        <GenreSelector genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} onClick={unselectGenre}/>
      </div>
      <Form setLoading={setLoading} selectedGenres={selectedGenres} setPlaylist={setPlaylist} />
    </div>
  )
}
