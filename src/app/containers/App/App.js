import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import Content from '../../components/content/content'

class App extends Component {
  constructor(props) {
    super(props)
    this.expanded = this.props.isSidebarOpen ? '' : styles.expanded
  }
  render() {
    return (
      <div>
        <Header {...this.props}/>
        <Sidebar {...this.props}/>
        <Content {...this.props}/>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSidebarOpen: state.app.isSidebarOpen
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
