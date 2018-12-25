import React, {Component} from 'react';
import Header from "./Layout/header";
import SideBar from "./Layout/sidebar";
import {connect} from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <SideBar/>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="unstarted-dashboard">
                <div
                  class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 class="h1">
                    <i className="icon-arrow-up52 label-icon-lg"> </i>
                    Please submit an extension above to begin
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(Home)