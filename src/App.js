import React, { Component } from 'react'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router
  // , Route, Switch, Link
} from 'react-router-dom'
import MainRouter from './MainRouter'
import Spinner from './components/Spinner/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Suspense fallback={<Spinner />}>
            <MainRouter />
          </React.Suspense>
        </Router>
      </div>
    )
  }
}
