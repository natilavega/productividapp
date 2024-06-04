'use client'
import { useState } from 'react'
import Timer from './timer'
import TrackedTimes from './tracked-times-list'

export default function TimeTracker () {
  const [trackedTimes, setTrackedTimes] = useState([])

  const handleTimeStop = (time) => {
    setTrackedTimes([...trackedTimes, time])
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-40 bg-gray-100">
      <Timer onTimeStop={handleTimeStop} />
      {trackedTimes.length > 0 && (
        <TrackedTimes trackedTimes={trackedTimes} />
      )}
    </div>
  )
}
