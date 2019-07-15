import React from 'react'
import { Redirect, Route } from 'react-router'
import routes from '../config/routes'
import * as selectors from '../store/identity/selectors'
import { connect } from 'react-redux'

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === 1 ? <Component {...props} /> : <Redirect to={{ pathname: routes.root }} />
    }
  />
)

const mapStateToProps = state => {
  return {
    isAuthenticated: selectors.authenticatedSelector(state),
  }
}

export default connect(mapStateToProps)(PublicRoute)
