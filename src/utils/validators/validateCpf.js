import { clearNumber } from '../clearNumber.js'

export function validateCpf(cpf) {
  const cleanCpf = clearNumber(cpf)

  if (cleanCpf.length !== 11) return false

  if (/^(\d)\1+$/.test(cleanCpf)) return false

  const calcDigit = (base, factor) => {
    let total = 0
    for (let i = 0; i < base.length; i++) {
      total += base[i] * (factor - i)
    }
    const rest = (total * 10) % 11
    return rest === 10 ? 0 : rest
  }

  const firstDigit = calcDigit(cleanCpf.slice(0, 9), 10)
  const secondDigit = calcDigit(cleanCpf.slice(0, 10), 11)

  return (
    firstDigit === Number(cleanCpf[9]) &&
    secondDigit === Number(cleanCpf[10])
  )
}