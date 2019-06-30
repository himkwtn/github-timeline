import React from 'react'

const TimelineCircle = () => {
  return (
    <div
      style={{
        content: ' ',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '40px',
        width: '40px',
        backgroundColor: 'rgb(207, 206, 206)',
        borderRadius: '50%',
        zIndex: 9
      }}
    />
  )
}

export default TimelineCircle
