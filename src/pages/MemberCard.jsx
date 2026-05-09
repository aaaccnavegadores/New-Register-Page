import { useEffect, useRef  } from 'react'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import CardActions from '../components/buttons/CardActions.jsx'
import '../styles/card.css'

export default function MemberCard() {
  const navigate = useNavigate()
  const cardRef = useRef(null)

  const member = JSON.parse(sessionStorage.getItem('member'))

  useEffect(() => {
    if (!member) {
      navigate('/')
    }

    return () => {
      sessionStorage.removeItem('member')
    }
  }, [member, navigate])

  if (!member) return null

  async function handleDownload() {
    const element = cardRef.current
  
    if (!element) return

    element.classList.add('download-mode')
  
    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
      backgroundColor: null
    })

    element.classList.remove('download-mode')
  
    const image = canvas.toDataURL('image/png')
  
    const link = document.createElement('a')
    link.href = image
    link.download = 'cartao-nave.png'
    link.click()
  }

  function handleFinish() {
    sessionStorage.removeItem('member')
    navigate('/')
  }

  return (
    <div className='card-page container mt-5 d-flex flex-column align-items-center justify-content-center'>
      <h2 className='text-center'>Cartão da Nave</h2>

      <div
        ref={cardRef}
        className='member-card d-flex p-4 mt-4 shadow align-items-start'
      >
        <div className='me-4 flex-grow-1'>
          <h4>{member.nome.toUpperCase()}</h4>

          <hr className='border-white border-2 opacity-100 mt-4 mb-4' />

          <p>
            <strong>Número do Sócio:</strong> {member.inscricao}
          </p>

          <p>
            <strong>Categoria:</strong> {member.categoria.toUpperCase()}
          </p>

          <p>
            <strong>Ocupação:</strong> {member.ocupacao.toUpperCase()}
          </p>
        </div>

        <img
          className='logo-img img-fluid ms-3'
          src='https://res.cloudinary.com/dc1dcxnpt/image/upload/v1742221162/Nave/logo.png'
          alt='Navegadores'
        />
      </div>

      <CardActions onDownload={handleDownload} onBack={handleFinish} />
    </div>
  )
}