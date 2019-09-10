import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = false

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/unauthorized',
            state: { from: props.location }
          }} />
        )
    )}
  />
)
