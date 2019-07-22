import React, { useEffect, useState } from 'react'
import './Timeline.scss'
import { service } from './service'
import Container from './Container'
import Profile from './Profile'
import { GithubProfile, GithubRepository } from './types'
import Header from './Header'
import SearchBar from './SearchBar'
const Timeline = () => {
  const [profile, setProfile] = useState<GithubProfile>()
  const [repos, setRepos] = useState<GithubRepository[]>([])
  useEffect(() => {
    const subscription = service.data$.subscribe(({ profile, repos }) => {
      setProfile(profile)
      setRepos(repos)
    })
    return () => subscription.unsubscribe()
  }, [])
  return (
    <div className="bg">
      <Header>
        <SearchBar />
        {profile && <Profile {...profile} />}
      </Header>

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
