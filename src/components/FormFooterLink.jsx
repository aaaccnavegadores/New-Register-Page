import { Link } from 'react-router-dom'

export default function FormFooterLink({ to, text }) {
  return (
    <div className='text-center mt-3'>
      <Link to={to} className='link link-footer'>
        {text}
      </Link>
    </div>
  )
}