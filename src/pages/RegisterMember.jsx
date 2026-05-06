import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


import RegisterForm from '../components/RegisterForm.jsx'
import FormButtons from '../components/buttons/FormButtons.jsx'
import FormFooterLink from '../components/FormFooterLink.jsx'
import { useMember } from '../hooks/useMember.js'


export default function RegisterMember() {
  const { error, resetSearch, createRegistry } = useMember()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
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
      categoria: '',
      ocupacao: '',
      esportes: [],
      games: [],
      condicao: '',
      concordo: false
    }
  })

  function handleResetAll() {
    resetSearch()
    reset()
  }

  async function handleCreate(data) {
    const newMember = await createRegistry(data)

    if (newMember) {
      navigate('/cartao')
    }
  }

  return (
    <>
      <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
        <div className='form-box col-md-8 col-lg-6'>
          <h2 className='mb-4 text-center'>Ficha de Inscrição</h2>
          
          <div className='mt-4'>
            <RegisterForm
              register={register}
              handleSubmit={handleSubmit}
              setValue={setValue}
              watch={watch}
              control={control}
              errors={errors}
              onSubmit={handleCreate}
            />
          </div>

          {error && <p className='error-message'>{error}</p>}
        </div>

        <FormButtons formId='register-form' onReset={handleResetAll} />

        <FormFooterLink to='/atualizar' text='Já é inscrito? Atualize sua inscrição aqui' />
      </div>
    </>
  )
}
