'use client'
import { useState } from 'react'
import Timer from './timer'
import TrackedTimes from './tracked-times-list'

const mockProjects = [
  {
    id: 1,
    name: 'Proyecto 1'
  },
  {
    id: 2,
    name: 'Proyecto 2'
  },
  {
    id: 3,
    name: 'Proyecto 3'
  }
]

export default function TimeTracker () {
  const [trackedTimes, setTrackedTimes] = useState([])

  const handleTimeStop = (time) => {
    setTrackedTimes([...trackedTimes, time])
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-40 bg-gray-100">
      <Timer onTimeStop={handleTimeStop} projects={mockProjects} />
      {trackedTimes.length > 0 && (
        <TrackedTimes trackedTimes={trackedTimes} projects={mockProjects} />
      )}
    </div>
  )
}
