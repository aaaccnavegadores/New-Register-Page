import { clearNumber } from '../utils/clearNumber.js'

export default function SearchBar({ query, setQuery, onSearch, disabled }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) return
    
    onSearch(query)
  }

  const handleChange = (e) => {
    const value = clearNumber(e.target.value)
    setQuery(value)

    if (value === '') {
      onSearch('')
    }
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <input
          type='search'
          inputMode='numeric'
          placeholder='Digite a matrícula'
          value={query}
          onChange={handleChange}
          className='form-control'
          disabled={disabled}
        />
        <button className='btn btn-outline-primary search-button' type='submit' disabled={disabled}>
          <i className='bi bi-search'></i>
        </button>
      </div>
    </form>
  )
}
