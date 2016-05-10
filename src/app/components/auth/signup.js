import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Input from '../forms/input'
import { signupUser } from '../../redux/actions/actions'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastname: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }
  handleChange(name, value) {
    return this.setState({
      [name]: value
    }, () => {
      if (this.props.onChange) this.props.onChange(this.state);
    })
  }
  handleSignup(e) {
    e.preventDefault()
    const creds = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    this.props.signupUser(creds, '/dashboard')
  }
  render() {
    return (
      <div className="container-center lg animated slideInDown">
        <div className="view-header">
            <div className="header-icon">
                <i className="pe page-header-icon pe-7s-add-user"></i>
            </div>
            <div className="header-title">
                <h3>Register</h3>
                <small>
                    Please enter your data to register.
                </small>
            </div>
        </div>

        <div className="panel panel-filled">
            <div className="panel-body">
                <p>

                </p>
                <form action="index.html" id="loginForm" noValidate>
                    <div className="row">
                        <Input
                          className="col-lg-6"
                          name="username"
                          label="Username"
                          required={true}
                          placeholder="example@gmail.com"
                          onChange={value => {
                            this.handleChange("username", value)
                          }}
                          renderAfter={() => 'Your unique username to app'}
                        />
                        <Input
                          className="col-lg-6"
                          name="password"
                          label="Password"
                          required={true}
                          onChange={value => {
                            this.handleChange("password", value)
                          }}
                          placeholder="********"
                          title="Minimum 8 characters long"
                          renderAfter={() => 'Your strong password'}
                        />
                        <Input
                          className="col-lg-6"
                          name="repeatpassword"
                          label="Repeat Password"
                          required={true}
                          onChange={value => {
                            this.handleChange("repeatpassword", value)
                          }}
                          placeholder="********"
                          title="Minimum 8 characters long"
                          renderAfter={() => 'Please repeat your password'}
                        />
                        <Input
                          className="col-lg-6"
                          name="email"
                          label="Email Address"
                          required={true}
                          placeholder="example@gmail.com"
                          onChange={value => {
                            this.handleChange("username", value)
                          }}
                          renderAfter={() => 'Your address email to contact'}
                        />

                    </div>
                    <div>
                        <button className="btn btn-accent" onClick={this.handleSignup}>Signup</button>
                        <Link className="" to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating   : state.isAuthenticating,
  statusText         : state.statusText
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signupUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
