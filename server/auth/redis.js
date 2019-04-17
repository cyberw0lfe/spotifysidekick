const redis = require('redis')
const { promisify } = require('util');

const redisClient = redis.createClient()
redisClient.on('connect', () => {
  console.log('Redis client connected');
})
redisClient.on('error', err => {
  console.log('Redis ERROR: ', err)
})

const getTokenByUuid = (uuid) => {
  const getAsync = promisify(redisClient.get).bind(redisClient)
  return getAsync(uuid)
}

const saveToken = (uuid, token) => redisClient.set(uuid, token, redis.print)

const deleteToken = (uuid) => redisClient.del(uuid, redis.print)

module.exports = { getTokenByUuid, saveToken, deleteToken }