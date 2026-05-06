import { Link } from 'react-router-dom'

export default function AdditionalInfo({ register, errors }) {
  return (
    <>
      <div className='mb-4'>
        <label className='form-label'>Alergias ou condições</label>
        <input
          type='text'
          className='form-control'
          {...register('condicao')}
        />
      </div>

      <div className='form-check mb-3'>
        <input
          type='checkbox'
          className={`form-check-input ${errors?.concordo ? 'is-invalid' : ''}`}
          {...register('concordo', { required: true })}
        />
        <label  htmlFor='concordo' className='form-check-label d-block'>
          Li e concordo com o Código de Conduta*
        </label>

        <Link
          target='_blank'
          to={'https://github.com/aaaccnavegadores/codigo_de_conduta/blob/main/codigo_de_conduta_aaaccn.pdf'}
          className='link link-term'
        >
          Clique aqui para acessar o Código de Conduta
        </Link>
        
      </div>
    </>
  )
}