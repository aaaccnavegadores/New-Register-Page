import { maskCepInput } from '../utils/masks/maskCep.js'
import { getAddressByCep } from '../services/cepService.js'
import { clearNumber } from '../utils/clearNumber.js'

export async function handleCepChange(value, setValue) {
  const masked = maskCepInput(value)

  setValue('cep', masked, {
    shouldValidate: true,
    shouldDirty: true
  })

  const cleanCep = clearNumber(masked)

  if (cleanCep.length !== 8) return

  const address = await getAddressByCep(cleanCep)

  if (!address) return

  Object.entries(address).forEach(([key, value]) => {
    setValue(key, value)
  })
}