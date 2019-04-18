import React from 'react'
import queryString from 'query-string'
import cookie from 'js-cookie'
import { setAccessToken } from '../../utils/fetch';

const getTokenFromQueryString = () => {
  const url = window.location.href
  const query = url.split('?')
  const parsed = queryString.parse(query[1])
  return parsed.code
}

const setToken = async () => {
  cookie.set('authorized', true)
  const token = getTokenFromQueryString()
  await setAccessToken(token)
  window.location.replace('/profile')
}

export default () => {
  setToken()
  return <div></div>
}