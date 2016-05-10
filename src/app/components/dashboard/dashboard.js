import React from 'react'
import styles from './dashboard.scss'

const Dashboard = (props) => {
  return (
    <div className={styles.flexContainer}>
      {props.children}
    </div>
  )
}

export default Dashboard
