import React from 'react'
import Button from '../common/Button'
import { getLoginUrl } from '../../utils/fetch';
 
const clickHandler = async () => {
  const result = await getLoginUrl()
  window.location.replace(result.authorizeUrl)
}

export default () => (
  <div>
    <br/>
    <Button onClick={clickHandler} text='Login'/>
  </div>
)
