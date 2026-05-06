export const normalizeObject = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value === '' ? null : value])
  )

export const removeUndefined = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined)
  )