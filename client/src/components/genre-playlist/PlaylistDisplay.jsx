import React from 'react'
import Button from '../common/Button'
import Card from '../common/Card'
import List from '../common/List'
import './styles.css'

export default (props) => {
    // const playlist = props.playlist.map(track => {
    //   return <div key={track.name+track.artists[0].name} className='genre-playlist-item'>{track.name} - {track.artists[0].name}</div>
    // })
    // <List items={props.playlist} />
    return (
      <div>
        <Button onClick={props.onClick} text='Reset' />
        <br/>
        {/* <Card content={playlist} /> */}
        <Card content={<List items={props.playlist} />} />
      </div>
    )
}