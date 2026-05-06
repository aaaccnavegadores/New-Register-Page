import { clearNumber } from '../clearNumber.js'

export function maskCpfInput(value) {
  if (!value) {
    return
  }
  
  return clearNumber(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}