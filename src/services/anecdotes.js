import axios from 'axios'

const baseUrl = '/api/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return { type: 'GET_ALL', payload: response.data }
}

const createNew = async (content) => {
  const getId = () => (100000 * Math.random()).toFixed(0)
  const object = { content, di: getId(), votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async (anecdote) => {
  const votedAnecdote = { ...anecdote, votes: anecdote.votes+1 }
  const request = await axios.put(`${baseUrl}/${anecdote.id}`, votedAnecdote)
  return request.data
}

export default {
  getAll,
  createNew,
  vote
}