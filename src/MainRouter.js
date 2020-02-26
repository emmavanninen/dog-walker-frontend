import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
const Home = React.lazy(() => import('./components/Home/Home'))
const OwnerRegister = React.lazy(() => import('./components/Owner/Register'))
const OwnerLogin = React.lazy(() => import('./components/Owner/Login'))
class MainRouter extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/owner-register' component={OwnerRegister} />
          <Route exact path='/owner-login' component={OwnerLogin} />
        </Switch>
      </>
    )
  }
}
export default MainRouter
