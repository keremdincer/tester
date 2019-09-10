import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'

// Page Views
import Index from './Pages/Index'
import Test from './Pages/Test'
import Login from './Pages/Login'
import Unauthorized from './Pages/Unauthorized'

function App () {
  return (
    <Router>
      <div>
        <PrivateRoute path='/' exact component={Index} />
        <PrivateRoute path='/test' component={Test} />
        <Route path='/login/:id' component={Login} />
        <Route path='/unauthorized' component={Unauthorized} />
      </div>
    </Router>
  )
}

export default App
