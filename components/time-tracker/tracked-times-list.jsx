import { formatTimeWithColon } from '@/utils/time'

export default function TrackedTimesList ({ trackedTimes }) {
  return (
    <div className="mt-16 text-lg">
      <h2 className="mb-2">Tiempos guardados:</h2>
      <ul>
        {trackedTimes.map((trackedTime) => (
          <li key={trackedTime.id} className='flex flex-row justify-between gap-4 font-mono'>
            <strong>{formatTimeWithColon(trackedTime.time)}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}
