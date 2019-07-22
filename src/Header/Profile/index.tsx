import React from 'react'
import Img from 'react-image'
import { GithubProfile } from '../../common/types'
const Profile = (props: GithubProfile) => {
  const { username, avatar, url, name, bio, orgs } = props
  return (
    <div className="flex flex-row">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Img src={avatar} className="rounded-lg w-20 h-20 mr-5" />
      </a>
      <div className="text-left break-words">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="font-bold text-xl mr-4">
            {name}
            <span className="text-lg text-indigo-600 "> (@{username})</span>
          </p>
        </a>

        <p>{bio}</p>
        <div className="flex flex-row">
          {orgs.map(({ avatar, url }, i) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Img src={avatar} className="w-8 h-8" key={i} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
