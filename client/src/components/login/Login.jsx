import React from 'react'
import Button from 'react-bootstrap/Button'
import { getLoginUrl } from '../../utils/fetch';
 
const clickHandler = async () => {
  const result = await getLoginUrl()
  window.location.replace(result.authorizeUrl)
}

const style = {
  margin: '20px 0px 0px 20px',
  width: '40%'
}

export default () => (
    <Button variant='primary' block style={style} onClick={clickHandler}>Login</Button>
)
