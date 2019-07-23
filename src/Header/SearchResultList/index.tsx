import React from 'react'
import { service } from '../../common/service'
import Result from './Result'
import { useObservable } from '../../utils/hooks'

const SearchResultList = () => {
  const result = useObservable(service.searchResult$)
  return (
    <div
      className="container mx-auto mt-16 z-20  absolute  bg-white"
      style={{ left: '50%', transform: 'translate(-50%, 0)' }}
    >
      <div className="px-2 flex flex-wrap justify-around shadow-xl">
        {result && result.map(i => <Result {...i} key={i.avatar} />)}
      </div>
    </div>
  )
}

export default SearchResultList
