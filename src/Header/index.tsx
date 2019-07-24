import React from 'react'
import { service } from '../common/service'
import SearchBar from './SearchBar'
import Profile from './Profile'
import SearchResultList from './SearchResultList'
import { useObservable } from '../utils/hooks'

const Header = () => {
  const profile = useObservable(service.profile$)
  return (
    <div>
      <SearchResultList />
      <div className="flex h-auto container mx-auto w-auto p-6 bg-white items-start rounded-b-lg flex-col">
        <SearchBar />
        {profile && <Profile {...profile} />}
      </div>
    </div>
  )
}

export default Header
