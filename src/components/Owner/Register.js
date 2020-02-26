import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Owner.css'
import { ownerRegister } from '../../redux/actions/actions'

class OwnerRegister extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    // this.props.ownerRegister(this.state)
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row no-gutter'>
          <div className='d-none d-md-flex col-md-4 col-lg-6 bg-image' />
          <div className='col-md-8 col-lg-6'>
            <div className='login d-flex align-items-center py-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-9 col-lg-8 mx-auto'>
                    <h3 className='login-heading mb-4'>Sign up!</h3>
                    <form onSubmit={this.handleSubmit}>
                      <div className='form-label-group'>
                        <input
                          type='email'
                          id='inputEmail'
                          className='form-control'
                          placeholder='Email address'
                          name='email'
                          required
                          autoFocus
                          onChange={this.handleOnChange}
                        />
                        <label htmlFor='inputEmail'>Email address</label>
                      </div>
                      <div className='form-label-group'>
                        <input
                          type='password'
                          id='inputPassword'
                          className='form-control'
                          placeholder='Password'
                          name='password'
                          required
                          onChange={this.handleOnChange}
                        />
                        <label htmlFor='inputPassword'>Password</label>
                      </div>
                      <div className='form-label-group'>
                        <input
                          type='text'
                          id='inputFirstName'
                          className='form-control'
                          placeholder='First Name'
                          name='firstName'
                          required
                          onChange={this.handleOnChange}
                        />
                        <label htmlFor='inputFirstName'>First Name</label>
                      </div>
                      <div className='form-label-group'>
                        <input
                          type='text'
                          id='inputLastName'
                          className='form-control'
                          placeholder='Last Name'
                          name='lastName'
                          required
                          onChange={this.handleOnChange}
                        />
                        <label htmlFor='inputLastName'>Last Name</label>
                      </div>
                      <div className='form-label-group'>
                        <input
                          type='text'
                          id='inputPhone'
                          className='form-control'
                          placeholder='Phone'
                          name='phone'
                          required
                          onChange={this.handleOnChange}
                        />
                        <label htmlFor='inputPhone'>Phone</label>
                      </div>
                      <button
                        className='btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2'
                        type='submit'
                      >
                        Sign up
                      </button>
                      <div className='text-center'>
                        <Link className='small' to='/owner-login'>
                          Sign in
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
})

export default connect(mapStateToProps, { ownerRegister })(OwnerRegister)
