import React, { useEffect } from 'react'
import './Timeline.scss'
import { service } from './service'
import Container from './Container'
import Profile from './Profile'
import { useObservable } from '../utils/hooks'
const Timeline = () => {
  const repos = useObservable(service.repos$, [])
  const profile = useObservable(service.profile$)
  useEffect(() => {
    service.fetchProfile('himkwtn')
    service.fetchRepos('himkwtn')
  }, [])
  return (
    <div className="bg">
      {profile && <Profile {...profile} />}

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
