import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import SearchBar from '../components/SearchBar.jsx'
import UpdateForm from '../components/UpdateForm.jsx'
import FormButtons from '../components/buttons/FormButtons.jsx'
import FormFooterLink from '../components/FormFooterLink.jsx'
import { useMember } from '../hooks/useMember.js'
import { normalizeMember } from '../mappers/memberMapper.js'


export default function UpdateMember() {
  const { member, error, resetSearch, searchRegistry, updateRegistry } = useMember()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nome: '',
      cpf: '',
      matricula: '',
      email: '',
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      telefone: '',
      telefone_emergencia: '',
      condicao: '',
      concordo: false
    }
  })

  useEffect(() => {
    if (member) {
      reset(normalizeMember(member))
    }
  }, [member, reset])

  function handleResetAll() {
    setQuery('')
    resetSearch()
  }

  async function handleUpdate(data) {
    const updated = await updateRegistry(data)

    if (updated) {
      navigate('/cartao')
    }
  }

  return (
    <>
      <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
        <div className='form-box col-md-8 col-lg-6'>
          <h2 className='mb-4 text-center'>Atualizar Cadastro</h2>
          <label className='form-label'>Buscar Cadastro</label>

          <SearchBar query={query} setQuery={setQuery} onSearch={searchRegistry} disabled={!!member} />

          {error && <p className='error-message'>{error}</p>}
          
          <div className='mt-4'>
            {member && (
              <UpdateForm
                register={register}
                handleSubmit={handleSubmit}
                setValue={setValue}
                errors={errors}
                onSubmit={handleUpdate}
              />
            )}
          </div>
        </div>

        <FormButtons formId='update-form' onReset={handleResetAll} />

        <FormFooterLink to='/' text='Não é inscrito? Faça sua inscrição aqui' />
      </div>
    </>
  )
}
