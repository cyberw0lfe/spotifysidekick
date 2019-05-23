import React, { useState, useEffect } from 'react'
import Card from '../common/Card'
import { getGenreSeeds } from '../../utils/fetch'
import './styles.css'

const genreClick = (genre, selectedGenres, setSelectedGenres) => {
  if(selectedGenres.length < 5) {
    setSelectedGenres([...selectedGenres, genre])
  } else {
    alert('Select up to 5 seed genres')
  }
}

const renderSeedGenres = (genres, selectedGenres, setSelectedGenres) => (
  genres.map(genre => {
    return <div onClick={() => {genreClick(genre, selectedGenres, setSelectedGenres)}} key={genre} className='genre-list-item'>{genre}</div>
  })
)

export default () => {
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    getGenreSeeds()
      .then(result => {
        setGenres(result.genres)
        setLoading(false)
      })
  }, [])

  if(loading) return <div>Loading...</div>
  return (
    <div className='genre-select-container'>
      <Card title={'Seed Genres'} content={renderSeedGenres(genres, selectedGenres, setSelectedGenres)} />
    </div>
  )
}