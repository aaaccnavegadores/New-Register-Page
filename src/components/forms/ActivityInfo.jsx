import { useEffect, useState } from 'react'
import { useActivities } from '../../hooks/useActivities'

export default function ActivityInfo({ register, watch, setValue, errors }) {
  const ocupacao = watch('ocupacao')

  const shouldShow =
    ocupacao === 'atleta' || ocupacao === 'treinos'

  const { sports, games } = useActivities(shouldShow)

  useEffect(() => {
    if (!shouldShow) {
      setValue('esportes', [], {
        shouldValidate: true,
        shouldDirty: true
      })

      setValue('games', [], {
        shouldValidate: true,
        shouldDirty: true
      })
    }
  }, [shouldShow, setValue])

  if (!shouldShow) return null

  return (
    <div className="row">
      <div className="col-md-6 mb-5">
        <label className="form-label">Esportes*</label>

        <div className="d-flex gap-3 flex-wrap">
          {sports.map((esporte) => {
            const id = `esporte-${esporte.slug}`

            return (
              <div key={id} className="form-check col-md-12">
                <input
                  type="checkbox"
                  value={esporte.slug}
                  id={id}
                  className={`form-check-input ${errors?.esportes ? 'is-invalid' : ''}`}
                  {...register('esportes')}
                />

                <label htmlFor={id} className="form-activity-label">
                  {esporte.nome}
                </label>
              </div>
            )
          })}
        </div>

        {errors?.esportes && (
          <div className="invalid-feedback d-block">
            {errors.esportes.message}
          </div>
        )}
      </div>

      <div className="col-md-6 mb-5">
        <label className="form-label">E-sports*</label>

        <div className="d-flex gap-3 flex-wrap">
          {games.map((game) => {
            const id = `game-${game.slug}`

            return (
              <div key={id} className="form-check col-md-12">
                <input
                  type="checkbox"
                  value={game.slug}
                  id={id}
                  className={`form-check-input ${errors?.games ? 'is-invalid' : ''}`}
                  {...register('games')}
                />

                <label htmlFor={id} className="form-activity-label">
                  {game.titulo}
                </label>
              </div>
            )
          })}
        </div>

        {errors?.games && (
          <div className="invalid-feedback d-block">
            {errors.games.message}
          </div>
        )}
      </div>
    </div>
  )
}