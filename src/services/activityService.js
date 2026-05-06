import { api } from '../../api.js'

export async function getSports() {
  const res = await api.get('/esporte')

  return res.data
}

export async function getGames() {
  const res = await api.get('/game')

  return res.data
}