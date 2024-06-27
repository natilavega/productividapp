export function formatTimeWithColon (seconds) {
  const getSeconds = `0${seconds % 60}`.slice(-2)
  const minutes = Math.floor(seconds / 60)
  const getMinutes = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2)
  return `${getHours}:${getMinutes}:${getSeconds}`
}

export function formatTimeAMPM (date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12 // La hora 0 debe ser 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  return `${hours}:${minutes} ${ampm}`
}
