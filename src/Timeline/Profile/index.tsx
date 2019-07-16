import React from 'react'
import Img from 'react-image'
import { GithubProfile } from '../types'

const Profile = (props: GithubProfile) => {
  const { username, avatar, url, name, bio, orgs } = props
  return (
    <div className="flex h-32 container mx-auto w-auto p-6 bg-white items-center rounded-b-lg">
      <Img src={avatar} className="rounded-lg w-20 h-20 mr-5" />
      <div className="text-left">
        <span className="font-bold text-xl mr-4">{name}</span>
        <span className="text-lg">({username})</span>
        <p>{bio}</p>
        {orgs.map(({ avatar, url }, i) => (
          <Img src={avatar} className="w-8 h-8" key={i} />
        ))}
      </div>
    </div>
  )
}

export default Profile
