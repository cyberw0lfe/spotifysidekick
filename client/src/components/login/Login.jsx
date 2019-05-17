import React from 'react'
import Button from '../common/Button'
import { getLoginUrl } from '../../utils/fetch';
 
const clickHandler = async () => {
  const result = await getLoginUrl()
  window.location.replace(result.authorizeUrl)
}

const style = {
  margin: '20px'
}

export default () => (
  <Button onClick={clickHandler} text='Login' style={style} />
)
