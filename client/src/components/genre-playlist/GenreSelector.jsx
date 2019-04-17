import React from 'react'
import './styles.css'

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

const renderSelectedGenres = (props) => (
  props.selectedGenres.map(genre => {
    return <div key={genre} className='genre-list-item' onClick={() => {props.onClick(genre)}}>{genre}</div>
  })
)

export default (props) => {
  return (
    <div className='genre-select-container'>
      <div>
        <div className='genre-select-title'>Seed Genres</div>
        <hr/>
        <div className='genre-list'>
          {renderSeedGenres(props)}
        </div>
      </div>
      <hr/>
      <div>
        <div className='genre-select-title'>Selected Genres</div>
        <hr/>
        <div className='selected-genre-list'>
          {renderSelectedGenres(props)}
        </div>
      </div>
    </div>
  )
}