import React from 'react'
import './styles.css'

export default (props) => {
    const playlist = props.playlist.map(track => {
      return <div key={track.name+track.artists[0].name} className='genre-playlist-item'>{track.name} - {track.artists[0].name}</div>
    })

    return (
      <div>
        <button onClick={props.onClick}>Reset</button>
        <br/>
        {playlist}
      </div>
    )
}