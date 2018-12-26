import {connect} from "react-redux";
import React, {Component} from 'react'

import Permission from './analyze/permission'
import CSP from './analyze/csp'
import ContentScript from './analyze/content_scripts'
import API from './analyze/api'
import Report from './analyze/report'

class Dashboard extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const state = this.props.analyze.state
    console.log(state)
    console.log('PROPS', this.props)

    switch (state) {
      case -1:
        return (
          <div>
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div className='text-center'>
              <h3>PLEASE WAITING FOR A MINUTE, YOU MIGHT NEED A COFFEE!!</h3>
            </div>
          </div>
        )
      case 1:
        return (<Permission/>)
      case 2:
        return (<CSP/>)
      case 3:
        return <ContentScript/>
      case 4:
        return <API/>
      case 5:
        return <Report/>
      default:
        return (
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h1">
              <i className="icon-arrow-up52 label-icon-lg mr-3" style={{fontSize:'1em'}}> </i>
              Please submit an extension above to begin
            </h1>
          </div>
        )
    }
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Dashboard)