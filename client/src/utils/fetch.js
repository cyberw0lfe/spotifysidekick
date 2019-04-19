const getLoginUrl = async () => {
  try{
    const response = await fetch('/api/login', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const setAccessToken = async (token) => {
  try{
    await fetch('/api/set-token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token: token})
    })
  } catch(err) {
    console.log(err)
  }
}

const logout = async () => {
  await fetch('api/logout', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  // return await response.json()
}

const fetchProfile = async () => {
  const response = await fetch('/api/profile', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  })
  if(response.status === 401) window.location.replace('/')
  return await response.json()
}

const executeSearch = async (query, types, limit) => {
  const response = await fetch('/api/search', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({query, types, limit})
  })
  if(response.status === 401) window.location.replace('/')
  return await response.json()
}

const getTopGenres = async () => {
  try {
    const response = await fetch('/api/top-genres', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    if(response.status === 401) window.location.replace('/')
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const getGenreSeeds = async () => {
  try {
    const response = await fetch('/api/genre-seeds', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    if(response.status === 401) window.location.replace('/')
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const generateGenrePlaylist = async (genres, name, limit, save) => {
  try {
    const response = await fetch('/api/generate-genre-playlist', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({genres, name, limit, save})
    })
    if(response.status === 401) window.location.replace('/')
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const generateArtistPlaylist = async (artists, name, limit, save) => {
  try {
    const response = await fetch('/api/generate-artist-playlist', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({artists, name, limit, save})
    })
    if(response.status === 401) window.location.replace('/')
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  getLoginUrl,
  setAccessToken,
  logout,
  fetchProfile,
  executeSearch,
  getTopGenres,
  getGenreSeeds,
  generateGenrePlaylist,
  generateArtistPlaylist
}