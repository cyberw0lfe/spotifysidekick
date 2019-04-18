import React from 'react'
import './styles.css'
import styles from './styles'
import Card from '../common/Card'

const genreClick = (genre, selectedGenres, setSelectedGenres) => {
  if(selectedGenres.length < 5) {
    setSelectedGenres([...selectedGenres, genre])
  } else {
    alert('Select up to 5 seed genres')
  }
}

const renderSeedGenres = (props) => (
  props.genres.map(genre => {
    return <div onClick={() => {genreClick(genre, props.selectedGenres, props.setSelectedGenres)}} key={genre} className='genre-list-item'>{genre}</div>
  })
)

const renderSelectedGenres = (props) => {
  if(props.selectedGenres.length > 0) {
    return props.selectedGenres.map(genre => {
      return <div key={genre} className='genre-list-item' onClick={() => {props.onClick(genre)}}>{genre}</div>
    })
  } else {
    return <div>Select a genre...</div>
  }
}

export default (props) => {
  return (
    <div style={styles.genreSelectContainer}>
      <Card title={'Seed Genres'} content={renderSeedGenres(props)} />
      <div style={styles.marginLeft}>
        <Card title={'Selected Genres'} content={renderSelectedGenres(props)} />
      </div>
    </div>
  )
}