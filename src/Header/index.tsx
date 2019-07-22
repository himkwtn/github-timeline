import React, { useState, useEffect } from 'react'
import { GithubProfile } from '../common/types'
import { service } from '../common/service'
import SearchBar from './SearchBar'
import Profile from './Profile'

const Header = () => {
  const [profile, setProfile] = useState<GithubProfile>()
  useEffect(() => {
    const subscription = service.data$.subscribe(({ profile }) => {
      setProfile(profile)
    })
    return () => subscription.unsubscribe()
  }, [])
  return (
    <div className="flex h-auto container mx-auto w-auto p-6 bg-white items-start rounded-b-lg flex-col">
      <SearchBar />
      {profile && <Profile {...profile} />}
    </div>
  )
}

export default Header
