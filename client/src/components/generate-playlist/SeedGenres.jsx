import React, { useState, useEffect } from 'react'
import Card from '../common/Card'
import { getGenreSeeds } from '../../utils/fetch'
import './styles.css'

const genreClick = (genre, state, setState) => {
  if(state.seeds.length < 5) {
    setState({
      ...state,
      seeds: [...state.seeds, genre]
    })
  } else {
    alert('Select up to 5 seed genres')
  }
}

const renderSeedGenres = (genres, state, setState) => (
  genres.map(genre => {
    return <div onClick={() => {genreClick(genre, state, setState)}} key={genre} className='genre-list-item'>{genre}</div>
  })
)

export default ({state, setState}) => {
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState()

  useEffect(() => {
    getGenreSeeds()
      .then(result => {
        setGenres(result.genres)
        setLoading(false)
      })
  }, [])

  if(loading) return <div>Loading...</div>
  return (
    <Card title={'Seed Genres'} content={renderSeedGenres(genres, state, setState)} />
  )
}