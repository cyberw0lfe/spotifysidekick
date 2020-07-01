import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { getGenreSeeds } from '../../utils/fetch'
import './styles.css'

const genreClick = (genre, state, setState) => {
  if(state.seeds.includes(genre)) {
    alert(`'${genre}' is already a seed`)
  } else if (state.seeds.length > 5 && state.seeds.length < 1) {
    alert('Select up to 5 seed genres')
  } else {
    setState({
      ...state,
      seeds: [...state.seeds, genre]
    })
  }
}

const renderSeedGenres = (genres, state, setState) => (
  genres.map(genre => {
    return <ListGroupItem onClick={() => {genreClick(genre, state, setState)}} key={genre} className='genre-list-item'>{genre}</ListGroupItem>
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
    <Card className='tab-card seed-container'>
      <h5>Seed Genres</h5>
      <ListGroup>
        {renderSeedGenres(genres, state, setState)}
      </ListGroup>
    </Card>
  )
}