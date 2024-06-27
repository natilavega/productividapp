import { useState, useEffect } from 'react'
import { formatTimeAMPM, formatTimeWithColon } from '@/utils/time'

export default function Timer ({ onTimeStop, projects }) {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [description, setDescription] = useState('')
  const [selectedProject, setSelectedProject] = useState('')

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
        startTime: formatTimeAMPM(startTime),
        endTime: formatTimeAMPM(endTime),
        description: description,
        project: selectedProject
      })
      setTime(0)
      setStartTime(null)
      setDescription('')
    }
    return () => clearInterval(interval)
  }, [isActive, time, onTimeStop, startTime, description, selectedProject])

  const handleButtonClick = () => {
    if (!isActive) setStartTime(new Date())
    setIsActive(!isActive)
  }

  return (
    <div className="flex flex-col w-full lg:max-w-screen-lg lg:mx-auto">
      <div className='flex flex-row justify-between items-center gap-2 lg:gap-4 bg-white rounded-lg px-2 py-4 mb-6 lg:mb-3'>
        <div className='text-4xl font-mono font-semibold text-center w-2/3 lg:w-3/4'>
          {formatTimeWithColon(time)}
        </div>
        <button
          className={`w-1/3 lg:w-1/4 p-2 rounded-lg text-white text-center font-semibold uppercase ${isActive ? 'bg-red-400' : 'bg-black'}`}
          onClick={handleButtonClick}
        >
          {isActive ? 'Detener' : 'Iniciar'}
        </button>
      </div>

      <div className='flex flex-col lg:flex-row gap-3'>
        <input
          type="text"
          placeholder="¿En qué estás trabajando?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 rounded-lg lg:w-1/2 focus:ring-2 focus:ring-black outline-none"
        />
        <div className='relative px-3 bg-white rounded-lg lg:w-1/2 cursor-pointer focus-within:ring-2 focus-within:ring-black'>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full py-3 outline-none bg-transparent"
          >
            <option value="">Seleccionar Proyecto</option>
            {projects.map((project) => (
              <option key={project.id} value={project.name}>{project.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
