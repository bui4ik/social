import React from 'react'
import { Switch } from 'react-router'
import routes from 'config/routes'
import AuthenticationPage from 'components/pages/Authentication'
import ProfilePage from 'components/pages/OwnProfile'
import UsersList from 'components/pages/UsersList'
import OtherUserProfilePage from 'components/pages/UserProfile'
import PublicRoute from './publicroute'
import PrivateRoute from './privateroute'
import Settings from 'components/pages/Settings'

const Routes = () => (
  <Switch>
    <PrivateRoute path={routes.root} exact component={ProfilePage} />
    <PrivateRoute path={routes.settings} exact component={Settings} />
    <PrivateRoute path={routes.users} exact component={UsersList} />
    <PrivateRoute path={routes.usersProfile} exact component={OtherUserProfilePage} />
    <PublicRoute path={routes.authentication} exact component={AuthenticationPage} />
  </Switch>
)

export default Routes
