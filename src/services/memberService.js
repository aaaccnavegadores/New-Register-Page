import { api } from '../../api.js'


export async function getMemberByDocument(matricula) {
  try {
    const res = await api.get(`membro/documento`, {
      params: { matricula }
    })

    return res.data
  } catch (err) {
    const errorMessage = err.response?.data?.message || 'Erro ao buscar membro'

    throw new Error(errorMessage)
  }
}

export async function createMember(data) {
  const res = await api.post(`/membro`, data)

  return res.data
}


export async function updateMember(member_id, data) {
  const res = await api.put(`/membro/${member_id}`, data)
  
  return res.data
}