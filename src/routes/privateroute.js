import React from 'react'
import { Redirect, Route } from 'react-router'
import routes from '../config/routes'
import * as selectors from '../store/identity/selectors'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === 0 ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: routes.authentication }} />
      )
    }
  />
)

const mapStateToProps = state => {
  return {
    isAuthenticated: selectors.authenticatedSelector(state),
  }
}

export default connect(mapStateToProps)(PrivateRoute)
