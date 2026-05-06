import { handleInputChange } from '../../handlers/inputHandler.js'
import { maskCpfInput } from '../../utils/masks/maskCpf.js'
import { clearNumber } from '../../utils/clearNumber.js'
import { validateCpf } from '../../utils/validators/validateCpf.js'

export default function PersonalInfo({ register, setValue, errors }) {
  return (
    <>
      <div className='mb-3'>
        <label className='form-label'>Nome*</label>
        <input
          type='text'
          className={`form-control ${errors?.nome ? 'is-invalid' : ''}`}
          {...register('nome', { required: 'Preencha seu nome' })}
          
        />
        <div className='invalid-feedback'>
          {errors?.nome?.message}
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label className='form-label'>CPF*</label>
          <input
            type='text'
            inputMode='numeric'
            className={`form-control ${errors?.cpf ? 'is-invalid' : ''}`}
            {...register('cpf', {
              required: 'Informe o CPF',
              validate: (value) =>
                validateCpf(value) || 'CPF inválido'
            })}
            onChange={(e) => handleInputChange(e.target.value, setValue, 'cpf', maskCpfInput)}
          />
          <div className='invalid-feedback'>
            {errors?.cpf?.message}
          </div>
        </div>

        <div className='col-md-6 mb-3'>
          <label className='form-label'>Matrícula*</label>
          <input
            type='text'
            inputMode='numeric'
            className={`form-control ${errors?.matricula ? 'is-invalid' : ''}`}
            {...register('matricula', {
              required: 'Informe sua matrícula'
            })}
            onChange={(e) =>
              handleInputChange(e.target.value, setValue, 'matricula', clearNumber)
            }
          />
          <div className='invalid-feedback'>
            {errors?.matricula?.message}
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label className='form-label'>Email*</label>
        <input
          type='email'
          className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
          {...register('email', {
            required: 'Informe seu Email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email inválido'
            }
          })}
        />
        <div className='invalid-feedback'>
          {errors?.email?.message}
        </div>
      </div>
    </>
  )
}