export default function FormButtons({ onReset, formId }) {
  return (
    <div className='page-buttons d-flex gap-3 mt-3'>
      <button
        type='submit'
        form={formId}
        className='btn btn-primary btn-custom'
      >
        Enviar
      </button>

      <button
        type='button'
        onClick={onReset}
        className='btn btn-secondary btn-custom'
      >
        Limpar
      </button>
    </div>
  )
}