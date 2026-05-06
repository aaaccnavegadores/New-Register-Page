import { clearNumber } from '../clearNumber.js'

export function validatePhone(phone) {
  const cleanPhone = clearNumber(phone)

  if (!/^\d{10,11}$/.test(cleanPhone)) return false

  const ddd = cleanPhone.slice(0, 2)

  if (Number(ddd) < 11 || Number(ddd) > 99) return false

  return true
}