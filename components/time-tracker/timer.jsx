import { useState, useEffect } from 'react'
import { formatTimeWithColon } from '@/utils/time'

export default function Timer ({ onTimeStop }) {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
      onTimeStop({
        id: new Date(),
        time: time,
      })
      setTime(0)
    }
    return () => clearInterval(interval)
  }, [isActive, time, onTimeStop])

  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-mono mb-8">
        {formatTimeWithColon(time)}
      </div>
      <button
        className={`px-6 py-3 rounded text-white ${isActive ? 'bg-red-500' : 'bg-green-500'}`}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}
