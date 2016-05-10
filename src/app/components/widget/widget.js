import React, { Component } from 'react'
import styles from './widget.scss'

class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: this.props.isCollapsed || false
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.renderHeader = this.renderHeader.bind(this)

    this.header = this.props.header || true
    this.headerColor = this.props.headerColor || '#bc1622'
    this.bodyBackgroundColor = this.props.bodyColor || '#ffffff'
    this.isCollapsable = this.props.isCollapsable || true
    this.hasMenu = this.props.hasMenu || true
  }
  toggleCollapse() {
    return this.setState({isCollapsed: !this.state.isCollapsed})
  }
  renderHeader() {
    return this.header ? (
      <div className={`card-header ${styles.header}`}>
        <h4 className={styles.title}>
          { this.props.title || 'widget title' }
        </h4>
        {this.isCollapsable ? <button className="" onClick={this.toggleCollapse}>></button> : ''}
        {this.hasMenu ? <button className="">...</button> : ''}
      </div>
    ) : null
  }
  render() {
    return (
      <div className={`card ${styles.widget}`}>
        { this.renderHeader() }
        <div className={`card-block ${styles.body}`} style={{backgroundColor: this.bodyBackgroundColor, display: this.state.isCollapsed ? 'none' : ''}}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Widget
