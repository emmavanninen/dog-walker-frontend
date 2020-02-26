import React, { Component } from 'react'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router
  // , Route, Switch, Link
} from 'react-router-dom'
import MainRouter from './MainRouter'
import Spinner from './components/Spinner/Spinner'

// ? redux
import { Provider } from 'react-redux'
import store from './redux/store/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <React.Suspense fallback={<Spinner />}>
              <MainRouter />
            </React.Suspense>
          </Router>
        </Provider>
      </div>
    )
  }
}
