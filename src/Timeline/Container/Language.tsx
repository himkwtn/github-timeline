import React from 'react'
import { ICON, COLOR } from '../constants'

const Language = ({ language }: { language: string }) => {
  const lang = ICON[language]
  const color = COLOR[language]
  const icon = lang ? `devicon-${lang}-plain` : ''
  let iconColor: string
  if (icon) iconColor = '#FFF'
  else if (color) iconColor = color
  else iconColor = '#000'
  // const iconColor = color ? color : icon ? '#FFF' : '#000'
  return (
    <div className="flex items-center">
      <div
        className="h-5 w-5 rounded-full mr-4"
        style={{ backgroundColor: iconColor }}
      >
        <i className={icon} style={{ fontSize: '20px', color }} />
      </div>

      <span style={{ paddingRight: '20px' }}>{language || 'N/A'}</span>
    </div>
  )
}

export default Language
