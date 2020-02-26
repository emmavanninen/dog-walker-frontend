import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row no-gutter'>
            <div className='col-md-8 col-lg-6'>
              <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-9 col-lg-8 mx-auto'>
                      <h3 className='login-heading mb-4'>
                        Dog Owner Sign up here!
                      </h3>
                      <Link to='/owner-login'>
                        <button
                          className='btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2'
                          type='submit'
                        >
                          Go here
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8 col-lg-6'>
              <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-9 col-lg-8 mx-auto'>
                      <h3 className='login-heading mb-4'>
                        Dog Walk Sign up here!
                      </h3>
                      <Link to='/walker-auth'>
                        <button
                          className='btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2'
                          type='submit'
                        >
                          Go here
                        </button>
                      </Link>
                    </div>
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
export default Home
