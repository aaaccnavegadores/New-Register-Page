import { useEffect, useState } from 'react'
import { getSports, getGames } from '../services/activityService.js'

export function useActivities(enabled) {
  const [sports, setSports] = useState([])
  const [games, setGames] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    if (!enabled) return

    if (sports.length && games.length) return

    async function getActivities() {
      try {
        setLoading(true)

        const [sportsData, gamesData] = await Promise.all([
          getSports(),
          getGames()
        ])

        setSports(sportsData)
        setGames(gamesData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getActivities()
  }, [enabled])

  return { error, sports, games, loading }
}