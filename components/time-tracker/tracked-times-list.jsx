import { formatTimeWithColon } from '@/utils/time'

export default function TrackedTimesList ({ trackedTimes }) {
  const totalTime = trackedTimes.reduce((acc, trackedTime) => acc + trackedTime.time, 0)
  const reversedTrackedTimes = [...trackedTimes].reverse()

  return (
    <div className="mt-16 text-lg w-full max-w-4xl mx-auto">
      <h2 className="mb-2">Tiempos guardados:</h2>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <tbody>
          {reversedTrackedTimes.map((trackedTime) => (
            <tr key={trackedTime.id}>
              <td className="border-t py-2 px-4">{trackedTime.description || 'Sin descripción'}</td>
              <td className="border-t py-2 px-4">
                {trackedTime.startTime} - {trackedTime.endTime}
              </td>
              <td className="border-t py-2 px-4">{formatTimeWithColon(trackedTime.time)}</td>
            </tr>
          ))}
          <tr>
            <td className="border-t py-2 px-4 font-semibold">Tiempo total:</td>
            <td className="border-t py-2 px-4"></td>
            <td className="border-t py-2 px-4 font-semibold">{formatTimeWithColon(totalTime)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
