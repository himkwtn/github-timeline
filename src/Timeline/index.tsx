import React from 'react'
import './Timeline.scss'
import { service } from '../common/service'
import Container from './Container'
import { useObservable } from '../utils/hooks'
const Timeline = () => {
  const repos = useObservable(service.repos$, [])
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
