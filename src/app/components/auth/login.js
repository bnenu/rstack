import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Input from '../forms/input'
import { loginUser } from '../../redux/actions/actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange(name, value) {
    return this.setState({
      [name]: value
    }, () => {
      if (this.props.onChange) this.props.onChange(this.state);
    })
  }
  handleLogin(e) {
    e.preventDefault()
    const creds = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.loginUser(creds, '/dashboard')
  }
  render() {
    return (
      <div className="container-center animated slideInDown">
        <div className="view-header">
            <div className="header-icon">
                <i className="pe page-header-icon pe-7s-unlock"></i>
            </div>
            <div className="header-title">
                <h3>Login</h3>
                <small>
                    Please enter your credentials to login.
                </small>
            </div>
        </div>

        <div className="panel panel-filled">
            <div className="panel-body">
                <form id="loginForm" noValidate>
                    <Input
                      className=""
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
                    <div>
                        <button className="btn btn-accent" onClick={this.handleLogin}>Login</button>
                        <Link className="" to="/signup">Signup</Link>
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
  return bindActionCreators({ loginUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
