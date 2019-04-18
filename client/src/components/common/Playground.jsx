import React from 'react'
import casual from 'casual-browserify'
import Button from './Button'
import Card from './Card'
import Input from './Input'

const style = {
  display: 'flex',
  flexDirection: 'column'
}

export default () => {
  return (
    <div style={style}>
      <Button text='playground' />
      <Input />
      <Card title={casual.short_description} content={casual.description}/>
    </div>
  )
}