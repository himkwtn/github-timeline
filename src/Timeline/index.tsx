import React, { useState, useEffect } from 'react'
import './Timeline.scss'
import { getRepo } from './service'
import { Repository } from './types'
import Container from './Container'
const Timeline = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  useEffect(() => {
    getRepo().then(setRepos)
  }, [])
  return (
    <div className="bg">
      <div className="timeline">
        <ul>
          {repos.map((repo, index) => (
            <Container {...repo} key={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Timeline
