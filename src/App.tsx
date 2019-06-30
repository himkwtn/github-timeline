import React from 'react'
import 'normalize.css'
import 'devicon'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Timeline from './Timeline'
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route path="/timeline" component={Timeline} />
      </Router>
    </div>
  )
}

export default App
