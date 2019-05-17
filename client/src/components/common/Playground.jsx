import React from 'react'
import casual from 'casual-browserify'
import Button from './Button'
import Card from './Card'
import Paper from './Paper'
import Input from './Input'

const margin = {
  margin: '10px'
}

export default () => {
  return (
    <div>
      <Button text='button'/>
      <div style={margin}></div>
      <Input placeholder='input'/>
      <div style={margin}></div>
      <Card title={casual.short_description} content={casual.description}/>
      <div style={margin}></div>
      <Paper content={casual.description} />
    </div>
  )
}