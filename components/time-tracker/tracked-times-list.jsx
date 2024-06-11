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
    <div className="mt-16 text-lg w-full max-w-4xl mx-auto">
      <h2 className="mb-2">Tiempos guardados:</h2>
      <div>
        Filtrar por:
        <select
          value={filterProject}
          onChange={(e) => setFilterProject(e.target.value)}
          className="mb-4 ml-4 px-4 py-2 border rounded"
        >
          <option value="">Todos los proyectos</option>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>{project.name}</option>
          ))}
        </select>
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <tbody>
          {filteredTrackedTimes.map((trackedTime) => (
            <tr key={trackedTime.id}>
              <td className="border-t py-2 px-4">{trackedTime.description || 'Sin descripción'}</td>
              <td className="border-t py-2 px-4">{trackedTime.project}</td>
              <td className="border-t py-2 px-4">
                {trackedTime.startTime} - {trackedTime.endTime}
              </td>
              <td className="border-t py-2 px-4">{formatTimeWithColon(trackedTime.time)}</td>
            </tr>
          ))}
          <tr>
            <td className="border-t py-2 px-4 font-semibold">Tiempo total:</td>
            <td className="border-t py-2 px-4"></td>
            <td className="border-t py-2 px-4"></td>
            <td className="border-t py-2 px-4 font-semibold">{formatTimeWithColon(totalTime)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
