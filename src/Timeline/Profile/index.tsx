import React from 'react'
import Img from 'react-image'
import { GithubProfile } from '../types'
const Profile = (props: GithubProfile) => {
  const { username, avatar, url, name, bio, orgs } = props
  return (
    <div className="flex flex-row">
      <Img src={avatar} className="rounded-lg w-20 h-20 mr-5" />
      <div className="text-left">
        <span className="font-bold text-xl mr-4">{name}</span>
        <span className="text-lg">({username})</span>

        <p>{bio}</p>
        <div className="flex flex-row">
          {orgs.map(({ avatar, url }, i) => (
            <Img src={avatar} className="w-8 h-8" key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
