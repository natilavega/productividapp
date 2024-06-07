import { useState, useEffect } from 'react'
import { formatTimeWithColon } from '@/utils/time'

export default function Timer ({ onTimeStop }) {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [description, setDescription] = useState('')

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
      const endTime = new Date()
      onTimeStop({
        id: startTime.getTime(),
        time: time,
        date: startTime.toLocaleDateString(),
        startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        description: description
      })
      setTime(0)
      setStartTime(null)
      setDescription('')
    }
    return () => clearInterval(interval)
  }, [isActive, time, onTimeStop, startTime, description])

  const handleButtonClick = () => {
    if (!isActive) setStartTime(new Date())
    setIsActive(!isActive)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-mono mb-8">
        {formatTimeWithColon(time)}
      </div>
      <input
        type="text"
        placeholder="¿En qué estás trabajando?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <button
        className={`px-6 py-3 rounded text-white ${isActive ? 'bg-red-500' : 'bg-green-500'}`}
        onClick={handleButtonClick}
      >
        {isActive ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}
