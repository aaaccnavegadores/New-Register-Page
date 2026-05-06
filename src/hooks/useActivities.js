import { useEffect, useState } from 'react'
import { getSports, getGames } from '../services/activityService.js'

export function useActivities(enabled) {
  const [sports, setSports] = useState([])
  const [games, setGames] = useState([])
  const [error, setError] = useState(null)
  

  useEffect(() => {
    if (!enabled) return

    async function getActivities() {
      try {
        const [sportsData, gamesData] = await Promise.all([
          getSports(),
          getGames()
        ])

        setSports(sportsData)
        setGames(gamesData)
      } catch (err) {
        setError(err.message)
      }
    }

    getActivities()
  }, [enabled])

  return { error, sports, games }
}