import React, { useState, useEffect } from 'react'
import './Timeline.scss'
import { getRepo, getProfile } from './service'
import { GithubRepository, GithubProfile } from './types'
import Container from './Container'
import Profile from './Profile'
const Timeline = () => {
  const [repos, setRepos] = useState<GithubRepository[]>([])
  const [profile, setProfile] = useState<GithubProfile>()
  useEffect(() => {
    getRepo('himkwtn').then(setRepos)
    getProfile('himkwtn').then(setProfile)
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
