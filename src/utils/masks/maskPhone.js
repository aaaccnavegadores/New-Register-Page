import { clearNumber } from '../clearNumber.js'

export function maskPhoneInput(value) {
  if (!value) {
    return
  }
  
  const cleanPhone = clearNumber(value).slice(0, 11)

  if (cleanPhone.length > 10) {
    return cleanPhone
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }

  return cleanPhone
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}