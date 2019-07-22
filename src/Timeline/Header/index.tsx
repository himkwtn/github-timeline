import React from 'react'

const Header = ({ children }) => {
  return (
    <div className="flex h-auto container mx-auto w-auto p-6 bg-white items-start rounded-b-lg flex-col">
      {children}
    </div>
  )
}

export default Header
