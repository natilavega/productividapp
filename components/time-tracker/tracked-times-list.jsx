import { useState } from 'react'
import { formatTimeWithColon } from '@/utils/time'

export default function TrackedTimesList ({ trackedTimes, projects }) {
  const [filterProject, setFilterProject] = useState('')

  const reversedTrackedTimes = [...trackedTimes].reverse()

  const filteredTrackedTimes = filterProject
    ? reversedTrackedTimes.filter(trackedTime => trackedTime.project === filterProject)
    : reversedTrackedTimes

  const totalTime = filteredTrackedTimes.reduce((acc, trackedTime) => acc + trackedTime.time, 0)

  return (
    <div className="w-full lg:max-w-screen-lg lg:mx-auto">
      <div className='flex flex-col-reverse md:flex-row items-end md:items-center md:justify-between w-full bg-gray-200 rounded-lg mb-3 px-4 py-2'>
        <div className='py-1'>
          <span className='text-sm mr-2'>Filtrar Proyecto:</span>
          <select
            value={filterProject}
            onChange={(e) => setFilterProject(e.target.value)}
            className="p-2 bg-gray-200 rounded-lg font-semibold cursor-pointer disabled:cursor-not-allowed focus:ring-2 focus:ring-black outline-none"
            disabled={trackedTimes.length === 0}
          >
            <option value="">Todos</option>
            {projects.map((project) => (
              <option key={project.id} value={project.name}>{project.name}</option>
            ))}
          </select>
        </div>
        <div className='py-1'>
          <span className='text-sm mr-2'>Total:</span>
          <span className='font-mono font-semibold text-xl'>{formatTimeWithColon(totalTime)}</span>
        </div>
      </div>

      {trackedTimes.length > 0 && (
        <div className="w-full bg-white divide-y divide-gray-100 rounded-lg">
          {filteredTrackedTimes.map((trackedTime) => (
            <div key={trackedTime.id} className='grid grid-cols-2 md:grid-cols-4 items-baseline p-4 mb-2'>
              <div className="col-span-2 py-2 md:py-0">
                {trackedTime.description || <span className='text-gray-500'>Sin descripción</span>}
                {trackedTime.project && <span className='bg-gray-200 rounded-xl text-xs font-semibold py-1 px-2 ml-3'>{trackedTime.project}</span>}
              </div>
              <div className="py-2 md:py-0 md:text-right">
                {trackedTime.startTime} - {trackedTime.endTime}
              </div>
              <div className='py-2 md:py-0 font-mono font-semibold text-right text-lg'>{formatTimeWithColon(trackedTime.time)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
