import { handleInputChange } from '../../handlers/inputHandler'
import { maskPhoneInput } from '../../utils/masks/maskPhone'
import { validatePhone } from '../../utils/validators/validatePhone'

export default function ContactInfo({ register, setValue, errors }) {
  return (
    <div className='row'>
      <div className='col-md-6 mb-3'>
        <label className='form-label'>Telefone*</label>
        <input
          type='text'
          inputMode='numeric'
          className={`form-control ${errors?.telefone ? 'is-invalid' : ''}`}
          {...register('telefone', {
            required: 'Adicione seu contato',
            validate: (value) =>
              validatePhone(value) || 'Telefone inválido'
          })}
          onChange={(e) => handleInputChange(e.target.value, setValue, 'telefone', maskPhoneInput)}
        />
        <div className='invalid-feedback'>
          {errors?.telefone?.message}
        </div>
      </div>

      <div className='col-md-6 mb-4'>
        <label className='form-label'>Tel. emergência</label>
        <input
          type='text'
          inputMode='numeric'
          className={`form-control ${errors?.telefone_emergencia ? 'is-invalid' : ''}`}
          {...register('telefone_emergencia', {
            validate: (value) =>
              !value || validatePhone(value) || 'Telefone inválido'
          })}
          onChange={(e) => handleInputChange(e.target.value, setValue, 'telefone_emergencia', maskPhoneInput)}
        />
        <div className='invalid-feedback'>
          {errors?.telefone_emergencia?.message}
        </div>
      </div>
    </div>
  )
}