import {connect} from "react-redux";
import React, {Component} from 'react'

class ContentScript extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const contenScriptData = this.props.analyze.result.content_scrips[0]
    const listJSs = contenScriptData.js
    const listMatches = contenScriptData.matches

    let renderListJS= []
    let renderListMATCHES= []

    for(let i=0;i<listJSs.lengthl;i++)
      renderListJS.push(<li className='list-group-item'>{`${listJSs[i]}`}</li>)

    for(let i=0;i<listMatches.length;i++)
      renderListMATCHES.push(<li className='list-group-item'>{`${listMatches[i]}`}</li>)

    return (
      <div className='row justify-content-center'>
        <ul className='list-group col-md-6'>
          <li className='list-group-item active bg-dark'>JS</li>
          {renderListJS}
        </ul>
        <ul className='list-group col-md-6'>
          <li className='list-group-item active bg-dark'>MATCHES</li>
          {renderListMATCHES}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ContentScript)