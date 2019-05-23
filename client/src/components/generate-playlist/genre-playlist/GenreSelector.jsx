import React from 'react'
import './styles.css'
import Card from '../../common/Card'

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

const style = {
  margin: '0px 0px 0px 20px',
}

export default (props) => {
  return (
    <div className='genre-select-container'>
      <Card title={'Seed Genres'} content={renderSeedGenres(props)} />
      <Card style={style} title={'Selected Genres'} content={renderSelectedGenres(props)} />
    </div>
  )
}