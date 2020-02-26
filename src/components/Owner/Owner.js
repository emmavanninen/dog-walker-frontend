import React, { Component } from 'react'
import Register from './Register'
import Login from './Login'
import './Owner.css'

export default class Owner extends Component {
  render() {
    return (
      <div>
        <Register />
        <Login />
      </div>
    )
  }
}
