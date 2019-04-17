import React, { useState, useEffect } from 'react'
import { getTopGenres } from '../../utils/fetch';
import './styles.css'

const renderGenres = (genres) => {
  return genres.map(genre => {
    return <div key={genre} className='top-genre'>{genre}</div>
  })
}

export default () => {
  const [loading, setLoading] = useState(true)
  const [topGenres, setTopGenres] = useState()

  useEffect(() => {
    getTopGenres()
      .then(genres => {
        setTopGenres(genres)
        setLoading(false)
      })
  }, [])

  return (
    <div className='discover-container'>
      <h2>Your Top Genres</h2>
      {loading ? <div>Loading...</div> : renderGenres(topGenres)}
    </div>
  )
}