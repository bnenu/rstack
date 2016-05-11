import React from 'react'
import { Link } from 'react-router'

import styles from './sidebar.scss'

const Sidebar = (props) => {
  const visible = props.isSidebarOpen ? '' : styles.sidebarToggle
  return (
      <aside className={`${styles.sidebar} ${visible}`}>
        <nav>
            <ul className="nav luna-nav">
                <li className={styles.navCategory}>
                    Main
                </li>
                <li className="active">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className={styles.navInfo}>
                    <i className="pe pe-7s-shield text-accent"></i>
                    <div className="m-t-xs">
                        <span className="c-white">Marifact</span> marine information systems.
                    </div>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar
