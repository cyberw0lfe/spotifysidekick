import React from 'react'
import './styles.css'

export default (props) => {
  return props.items.map(item => (
    <div id={item} className='list-item'>{`${item.name} - ${item.artists[0].name}`}</div>
  )) 
}