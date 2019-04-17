import React from 'react'
import { getLoginUrl } from '../../utils/fetch';
 
const clickHandler = async () => {
  const result = await getLoginUrl()
  window.location.replace(result.authorizeUrl)
}

export default () => (
  <div>
    <br/>
    <button onClick={clickHandler}>Login</button>
  </div>
)
