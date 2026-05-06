import axios from 'axios'
import { clearNumber } from '../utils/clearNumber.js'

export async function getAddressByCep(cep) {
  const cleanCep = clearNumber(cep)

  if (cleanCep.length !== 8) return null

  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`)

    if (data.erro) return null

    return {
      rua: data.logradouro || '',
      bairro: data.bairro || '',
      cidade: data.localidade || ''
    }
  } catch {
    return null
  }
}