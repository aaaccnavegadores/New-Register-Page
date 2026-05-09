export default function CardActions({ onDownload, onBack }) {
  return (
    <div className='page-buttons d-flex gap-3 mt-3'>
      <button
        className='btn btn-primary btn-custom'
        onClick={onDownload}
      >
        Download
      </button>

      <button
        className='btn btn-secondary btn-custom'
        onClick={onBack}
      >
        Finalizar
      </button>
    </div>
  )
}