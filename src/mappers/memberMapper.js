import { normalizeObject, removeUndefined } from '../utils/object.js'
import { maskCepInput } from '../utils/masks/maskCep.js'
import { maskCpfInput } from '../utils/masks/maskCpf.js'
import { clearNumber } from '../utils/clearNumber.js'
import { maskPhoneInput } from '../utils/masks/maskPhone.js'

export function normalizeMember(member) {
  return {
    member_id: member._id,
    nome: member?.nome || '',
    cpf: maskCpfInput(member?.cpf) || '',
    matricula: member?.matricula || '',
    email: member?.email || '',
    inscricao: member?.inscricao || '',

    cep: maskCepInput(member?.endereco?.cep) || '',
    rua: member?.endereco?.rua || '',
    numero: member?.endereco?.numero || '',
    complemento: member?.endereco?.complemento || '',
    bairro: member?.endereco?.bairro || '',
    cidade: member?.endereco?.cidade || '',

    telefone: maskPhoneInput(member?.telefone) || '',
    telefone_emergencia: maskPhoneInput(member?.telefone_emergencia) || '',

    condicao: member?.condicao || '',
    categoria: member?.categoria || '',
    ocupacao: member?.ocupacao || '',
    concordo: false,
  }
}

function adjustAddress(data) {
  return removeUndefined(
    normalizeObject({
      cep: clearNumber(data.cep),
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
    })
  )
}

export function updateMemberPayload(data) {
  const endereco = adjustAddress(data)
  
  return removeUndefined(
    normalizeObject({
      nome: data.nome,
      cpf: clearNumber(data.cpf),
      matricula: data.matricula,
      email: data.email,
      inscricao: data.inscricao,
      endereco,
      telefone: clearNumber(data.telefone),
      telefone_emergencia: clearNumber(data.telefone_emergencia),
      condicao: data.condicao,
    })
  )
}

export function crateMemberPayload(data) {
  const endereco = adjustAddress(data)
  
  return removeUndefined(
    normalizeObject({
      nome: data.nome,
      cpf: clearNumber(data.cpf),
      matricula: data.matricula,
      email: data.email,
      endereco,
      telefone: clearNumber(data.telefone),
      telefone_emergencia: clearNumber(data.telefone_emergencia),
      categoria: data.categoria,
      ocupacao: data.ocupacao,
      esportes: data.esportes?.length ? data.esportes : undefined,
      games: data.games?.length ? data.games : undefined,
      condicao: data.condicao,
    })
  )
}