import React from 'react'
import Img from 'react-image'
import { service } from '../../common/service'
import { SearchResult } from '../../common/types'

const Result = ({ username, avatar }: SearchResult) => {
  const handleClick = () => {
    service.fetchData(username)
  }
  return (
    <li onClick={handleClick}>
      <div className="flex items-center mt-2">
        <Img src={avatar} className="rounded-full w-12 h-12 mr-2" />
        <p>{username}</p>
      </div>
    </li>
  )
}

export default Result
