import { generatePlaylist } from '../../utils/fetch'

const validateInput = (selectedGenres, name, limit, saveToggle) => {
  if(selectedGenres.length === 0 || selectedGenres.length > 5) {
    alert('Select 1-5 seeds')
    return false
  }
  if(limit < 1 || limit > 100) {
    alert('Select a limit between 1-100 tracks')
    return false
  }
  if(saveToggle && name.length < 1) {
    alert(saveToggle)
    alert('Enter a non-empty name for the playlist')
    return false
  }
  return true
}

const tunableAttributes = ['acousticness', 'danceability', 'duration_ms', 'energy', 'instrumentalness', 'key', 'liveness', 'loudness',
  'mode', 'popularity', 'speechiness', 'tempo', 'time_signature', 'valence']

const tunableOptions = ['target', 'min', 'max']

const getAdvancedOptions = () => {
  const options = {}
  tunableAttributes.forEach(attribute => {
    tunableOptions.forEach(option => {
      const element = document.getElementById(`${attribute}-${option}`) 
      if(element && element.value !== ''){
        options[`${option}_${attribute}`] = document.getElementById(`${attribute}-${option}`).value
      }
    })
  })
  return options
}

const onSubmit = async (event, state, setState) => {
  event.preventDefault()
  let limit = document.getElementById('limit').value
  if(limit < 1 || limit > 100) limit=50
  const name = document.getElementById('playlist-name').value
  const saveToggle = document.getElementById('save-toggle').checked
  const advancedOptions = getAdvancedOptions()

  if(validateInput(state.seeds, name, limit, saveToggle)){
    const playlist = await generatePlaylist(state.seeds, state.playlistType, name, limit, saveToggle, advancedOptions)
    setState({
      ...state,
      playlist,
      activeTab: 'playlist'
    })
  }
}

export { validateInput, getAdvancedOptions, tunableOptions, onSubmit }