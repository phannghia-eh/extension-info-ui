import React from 'react'
import {connect} from 'react-redux'

class sidebarItems extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {



    return(
      <ul>

      </ul>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(sidebarItems)