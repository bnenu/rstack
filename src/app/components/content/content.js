import React from 'react'

import styles from './content.scss'

const Content = (props) => {
  const expanded = props.isSidebarOpen ? '' : styles.expanded
  return (
    <section className={`${styles.content} ${expanded}`}>
      <div className="container-fluid">
          { props.children }
      </div>
    </section>
  )
}

export default Content
