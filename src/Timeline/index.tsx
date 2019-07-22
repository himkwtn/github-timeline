import React, { useEffect, useState } from 'react'
import './Timeline.scss'
import { service } from '../common/service'
import Container from './Container'
import { GithubRepository } from '../common/types'
const Timeline = () => {
  const [repos, setRepos] = useState<GithubRepository[]>([])
  useEffect(() => {
    const subscription = service.data$.subscribe(({ repos }) => {
      setRepos(repos)
    })
    return () => subscription.unsubscribe()
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
