import React, { useState, useEffect } from 'react'
import Card from '../common/Card'
import { getGenreSeeds } from '../../utils/fetch'
import './styles.css'

const genreClick = (genre, seeds, setSeeds) => {
  if(seeds.length < 5) {
    setSeeds([...seeds, genre])
  } else {
    alert('Select up to 5 seed genres')
  }
}

const renderSeedGenres = (genres, seeds, setSeeds) => (
  genres.map(genre => {
    return <div onClick={() => {genreClick(genre, seeds, setSeeds)}} key={genre} className='genre-list-item'>{genre}</div>
  })
)

export default (props) => {
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState()

  useEffect(() => {
    getGenreSeeds()
      .then(result => {
        setGenres(result.genres)
        setLoading(false)
      })
  }, [])

  if(loading) return <div className='genre-select-container'>Loading...</div>
  return (
    <div className='genre-select-container'>
      <Card title={'Seed Genres'} content={renderSeedGenres(genres, props.seeds, props.setSeeds)} />
    </div>
  )
}