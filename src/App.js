import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'

// Page Views
import Index from './Pages/Index'
import Test from './Pages/Test'
import Login from './Pages/Login'
import Unauthorized from './Pages/Unauthorized'
import NotFound from './Pages/NotFound'

function App () {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/' exact component={Index} />
        <PrivateRoute path='/test' component={Test} />
        <Route path='/login/:id' component={Login} />
        <Route path='/unauthorized' component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
