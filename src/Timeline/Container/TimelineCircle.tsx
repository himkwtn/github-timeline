import React from 'react'
import './Container.scss'
const TimelineCircle = () => {
  return (
    <div
      className="timeline-circle rounded-full absolute h-8 w-8 z-10"
      style={{
        transform: 'translateX(-50%)',
        backgroundColor: 'rgb(207, 206, 206)'
      }}
    />
  )
}

export default TimelineCircle
