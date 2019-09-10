import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from './Pages/Index'
import Test from './Pages/Test'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Index</Link>
            </li>
            <li>
              <Link to='/test'>Test</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Index} />
        <Route path='/test' component={Test} />
      </div>
    </Router>
  )
}

export default App
