import React from 'react'
import 'normalize.css'
import 'devicon'
import Timeline from './Timeline'
import './App.css'
import Header from './Header'
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Timeline />
    </div>
  )
}

export default App
