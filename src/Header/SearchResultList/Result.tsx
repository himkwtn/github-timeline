import React from 'react'
import Img from 'react-image'
import { service } from '../../common/service'
import { SearchResult } from '../../common/types'
const Result = ({ username, avatar }: SearchResult) => {
  const handleClick = () => {
    service.fetchData(username)
  }
  return (
    <button
      onClick={handleClick}
      className="flex flex-wrap items-center m-2 rounded-full w-auto bg-gray-200"
    >
      <Img src={avatar} className="rounded-full w-12 h-12 mr-2" />
      <p className="mr-4 text-lg">{username}</p>
    </button>
  )
}

export default Result
