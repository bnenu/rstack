import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators, dispatch } from 'redux'

import styles from './header.scss'

import { toggleSidebar } from '../../redux/actions/actions'

const Header = (props) => {
  const handleToggle = (e) => {
    e.preventDefault()
    //toggle sidebar
    props.dispatch(toggleSidebar(props.isSidebarOpen))
  }
  return (
      <nav className={`navbar navbar-default navbar-fixed-top ${styles.header}`}>
        <Link className={`navbar-brand ${styles.brand}`} to="/">
            Default
            <span className={styles.subBrand}>app</span>
        </Link>
        <div className={styles.leftNavToggle}>
            <a href="" onClick={handleToggle}>
                <i className="stroke-hamburgermenu">menu</i>
            </a>
        </div>
        <div className={styles.title}>
          { props.title || 'App title' }
        </div>
        <ul className={`nav navbar-nav ${styles.headerNav}`}>
            <li className="dropdown">
                <a href="versions.html" >Versions
                    <span className="label label-warning pull-right">2</span>
                </a>
            </li>
            <li className=" profil-link">
                <a href="login.html">
                    <span className="profile-address">me@company.io</span>
                    <img src="images/profile.jpg" className="img-circle" alt=""/>
                </a>
            </li>
        </ul>
    </nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleSidebar }, dispatch)
}
export default connect()(Header)
