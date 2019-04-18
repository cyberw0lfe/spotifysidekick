import React from 'react'
import Button from '../common/Button'
import Card from '../common/Card'
import './styles.css'

export default (props) => {
    const playlist = props.playlist.map(track => {
      return <div key={track.name+track.artists[0].name} className='genre-playlist-item'>{track.name} - {track.artists[0].name}</div>
    })

    return (
      <div>
        <Button onClick={props.onClick} text='Reset' />
        <br/>
        <Card content={playlist} />
      </div>
    )
}