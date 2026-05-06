export function handleInputChange(value, setValue, fieldName, transform) {
  const formatted = transform?.(value) ?? value

  setValue(fieldName, formatted, {
    shouldValidate: true,
    shouldDirty: true
  })
}