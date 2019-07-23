import React, { ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { service } from '../../common/service'
import { useObservable } from '../../utils/hooks'

const SearchBar = () => {
  const input = useObservable(service.searchInput$, '')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    service.searchInput$.next(value)
  }
  return (
    <div className="flex w-full flex-col ">
      <div className="flex flex-row w-full">
        <input
          className="bg-gray-200 appearance-none w-full border-2 border-gray-200 rounded px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mr-2 flex-grow-1"
          type="text"
          value={input}
          placeholder="Github Username"
          onChange={handleInputChange}
        />
        <IconContext.Provider value={{ size: '2em' }}>
          <MdSearch />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default SearchBar
