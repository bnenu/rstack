import React from 'react'
import { Link } from 'react-router'

const Header = ({ title }) => {
  return <div>
    <h1>{ title }</h1>
    <Link to="/">Home </Link>
  </div>
}

export default Header
