import React, { useState, useEffect, ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { service } from '../../common/service'
import { SearchResult } from '../../common/types'
import Result from './Result'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<SearchResult[]>([])
  useEffect(() => {
    const resultSubscription = service.searchResult$.subscribe(setResult)
    const inputSubscription = service.searchInput$.subscribe(setInput)
    return () => {
      resultSubscription.unsubscribe()
      inputSubscription.unsubscribe()
    }
  }, [])
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    service.searchInput$.next(value)
  }
  return (
    <div className="flex w-full mb-4 flex-col">
      <div className="flex flex-row w-full">
        <input
          className="bg-gray-200 appearance-none w-full border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mr-2 flex-grow-1"
          type="text"
          value={input}
          placeholder="Github Username"
          onChange={handleInputChange}
        />
        <IconContext.Provider value={{ size: '2em' }}>
          <MdSearch />
        </IconContext.Provider>
      </div>
      <ul>{result && result.map(i => <Result {...i} key={i.avatar} />)}</ul>
    </div>
  )
}

export default SearchBar
