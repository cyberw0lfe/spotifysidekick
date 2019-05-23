import React from 'react'
import Button from '../../common/Button'
import Card from '../../common/Card'
import List from '../../common/List'
import './styles.css'

export default (props) => {
    return (
      <div>
        <Button onClick={props.onClick} text='Reset' />
        <br/>
        <Card content={<List items={props.playlist} />} />
      </div>
    )
}