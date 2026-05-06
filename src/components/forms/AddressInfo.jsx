import { handleCepChange } from '../../handlers/cepHandler.js'

export default function AddressInfo({ register, setValue, errors }) {  
  return (
    <>
      <div className='row'>
        <div className='col-md-4 mb-3'>
          <label className='form-label'>CEP</label>
          <input
            type='text'
            inputMode='numeric'
            className='form-control'
            {...register('cep')}
            onChange={(e) => handleCepChange(e.target.value, setValue)}
          />
        </div>

        <div className='col-md-8 mb-3'>
          <label className='form-label'>Rua*</label>
          <input
            type='text'
            className={`form-control ${errors?.rua ? 'is-invalid' : ''}`}
            {...register('rua', { required: 'Rua é obrigatória' })}
          />
          <div className='invalid-feedback'>
            {errors?.rua?.message}
          </div>
        </div>

        <div className='col-md-3 mb-3'>
          <label className='form-label'>Número*</label>
          <input
            type='text'
            className={`form-control ${errors?.numero ? 'is-invalid' : ''}`}
            {...register('numero', { required: 'Adicione o Nº' })}
          />
          <div className='invalid-feedback'>
            {errors?.numero?.message}
          </div>
        </div>

        <div className='col-md-9 mb-3'>
          <label className='form-label'>Complemento</label>
          <input
            type='text'
            className='form-control'
            {...register('complemento')}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label className='form-label'>Bairro*</label>
          <input
            type='text'
            className={`form-control ${errors?.bairro ? 'is-invalid' : ''}`}
            {...register('bairro', { required: 'Bairro é obrigatório' })}
          />
          <div className='invalid-feedback'>
            {errors?.bairro?.message}
          </div>
        </div>

        <div className='col-md-6 mb-4'>
          <label className='form-label'>Cidade*</label>
          <input
            type='text'
            className={`form-control ${errors?.cidade ? 'is-invalid' : ''}`}
            {...register('cidade', { required: 'Cidade é obrigatória' })}
          />
          <div className='invalid-feedback'>
            {errors?.cidade?.message}
          </div>
        </div>
      </div>
    </>
  )
}