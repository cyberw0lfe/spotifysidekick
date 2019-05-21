export default async (message) => {
  try{
    await fetch('/api/log', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
  } catch(err) {
    console.log(err)
  }
}