import Select from 'react-select'
import { Controller } from 'react-hook-form'

export default function CategoryInfo({ register, control, errors }) {
  const ocupacaoOptions = [
    { value: 'atleta', label: 'Atleta' },
    { value: 'treinos', label: 'Apenas treinos' },
    { value: 'membro', label: 'Somente membro' }
  ]

  return (
    <div className="row mb-5">
      <div className="col-md-6 mb-4">
        <label className="form-label">Categoria*</label>

        <div className="d-flex flex-wrap gap-3">
          <div className="form-check">
            <input
              type="radio"
              value="discente"
              className={`form-check-input ${errors?.categoria ? 'is-invalid' : ''}`}
              {...register('categoria', { required: 'Selecione a categoria' })}
            />
            <label className="form-radio-label">
              Aluno
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              value="docente"
              className={`form-check-input ${errors?.categoria ? 'is-invalid' : ''}`}
              {...register('categoria', { required: 'Selecione a categoria' })}
            />
            <label className="form-radio-label">
              Professor
            </label>
          </div>
        </div>

        {errors?.categoria && (
          <div className="invalid-feedback d-block">
            {errors.categoria.message}
          </div>
        )}
      </div>

      <div className="col-md-6">
        <label className="form-label">Participar como*</label>

        <Controller
          name="ocupacao"
          control={control}
          rules={{ required: 'Selecione uma opção' }}
          render={({ field }) => (
            <Select
              {...field}
              options={ocupacaoOptions}
              placeholder="Selecione..."
              classNamePrefix="react-select"
              value={ocupacaoOptions.find(opt => opt.value === field.value) || null}
              onChange={(selected) => field.onChange(selected?.value)}
              styles={{
                control: (base, state) => ({
                  ...base,
                  borderColor: errors?.ocupacao
                    ? '#dc3545'
                    : state.isFocused
                    ? '#ffab03'
                    : 'black',
                  boxShadow: state.isFocused
                    ? '0 0 8px rgba(255, 171, 3, 0.6)'
                    : 'none',
                  '&:hover': {
                    borderColor: '#ffab03'
                  }
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? '#ffab03' : 'white',
                  color: state.isFocused ? 'white' : 'black'
                })
              }}
            />
          )}
        />

        <div className="invalid-feedback d-block">
          {errors?.ocupacao?.message}
        </div>
      </div>
    </div>
  )
}