import React from 'react'
import casual from 'casual-browserify'
import Button from './Button'
import Card from './Card'
import Paper from './Paper'
import Input from './Input'


export default () => {
  return (
    <div>
      <Button text='button'/>
      <Input placeholder='input'/>
      <Card title={casual.short_description} content={casual.description}/>
      <Paper content={casual.description} />
    </div>
  )
}