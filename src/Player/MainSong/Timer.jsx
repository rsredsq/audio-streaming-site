import React from 'react'
import { Timer } from '../styled'

export default ({ duration, currentTime }) => {
  const prettyTime = (time) => {
    let hour = Math.floor(time / 3600)
    let min = '0' + Math.floor((time % 3600) / 60)
    let sec = '0' + Math.floor((time % 60))

    min = min.substr(min.length - 2)
    sec = sec.substr(sec.length - 2)

    if (!isNaN(sec)) {
      if (hour) {
        return `${hour}:${min}:${sec}`
      }
      return `${min}:${sec}`
    }
    return '00:00'
  }

  return (
    <Timer>
      {prettyTime(currentTime)} / {prettyTime(duration)}
    </Timer>
  )
}