import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Dashboard from '../../components/dashboard/dashboard'
import Widget from '../../components/widget/widget'

class MainDashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Dashboard>
        <Widget>
          <h3> this is a widget content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </Widget>
        <Widget>
          <h3> this is another widget content.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </Widget>
        <Widget>
          <h3> this is 3rd widget content</h3>
        </Widget>
        <Widget>
          <h3> this is 4th widget content</h3>
        </Widget>
        <Widget>
          <h3> this is 5th widget content</h3>
        </Widget>
        <Widget>
          <h3> this is 6th widget content</h3>
        </Widget>
        <Widget>
          <h3> this is 7th widget content</h3>
        </Widget>
      </Dashboard>
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
export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard)
