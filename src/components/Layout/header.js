import {connect} from "react-redux";
import React, {Component} from 'react'
import {ToastContainer} from 'react-toastify'
import {Link} from 'react-router'
import {sendAnalyzeRequest} from "../../actions/analyze.action";

class Header extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMoutn() {
  }

  render() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <ToastContainer/>

        <Link target='/dashboard' className="navbar-brand col-sm-3 col-md-2 mr-0 tarnish-logo text-white">
          {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture text-white"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>*/}
          EXTENSION INFO
        </Link>

        <input ref="link"
               value='https://chrome.google.com/webstore/detail/onenote-web-clipper/gojbdfnpnhogfdgjbigejoaolejmgdhk?hl=vi'
               className="chrome-extension-input form-control form-control-dark w-100"
               type="text"
               placeholder="https://chrome.google.com/webstore/detail/example-extension-name/kbfnbca..."/>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn btn-dark" onClick={(e) => this.handleOnAnalyze(e)}>
              Analyze Chrome Extension
              <i className="icon-arrow-right32 position-right"></i>
            </button>
          </li>
        </ul>
        {/*<div className="row">*/}
        {/*<div className="col-md-3 text-white bg-slate text-center" style={{background: '#263238', color: '#ffffffff'}}>*/}
        {/*<h6>EXTENSION INFO</h6>*/}
        {/*</div>*/}
        {/*<div className="col-md-6" style={{background: '#66666666'}}>*/}
        {/*<input className="form-control"/>*/}
        {/*</div>*/}
        {/*<div className="col-md-3 bg-slate" style={{background: '#263238', color: '#ffffffff'}}>*/}
        {/*<button className="btn btn-flat text-slate-800 mt-5">*/}
        {/*Analyze Chrome Extension*/}
        {/*<i className="icon-arrow-right32 position-right"></i>*/}
        {/*</button>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*<div className="navbar-header">*/}
        {/*<Link className="navbar-brand" href="/Dashboard"></Link>*/}
        {/*</div>*/}
        {/*<div className="row">*/}
        {/*<div className="col-md-7 ml-10">*/}
        {/*<input className="form-control"/>*/}
        {/*</div>*/}
        {/*<div className="nav navbar-nav navbar-right">*/}
        {/*<button className="btn btn-flat text-slate-800 mt-5">*/}
        {/*Analyze Chrome Extension*/}
        {/*<i className="icon-arrow-right32 position-right"></i>*/}
        {/*</button>*/}
        {/*</div>*/}

        {/*</div>*/}
        {/*<div className="collapse navbar-collapse">*/}
        {/*/!*<input className="form-control"/>*!/*/}
        {/*</div>*/}
      </nav>
    )
  }

  handleOnAnalyze() {
    this.props.dispatch(sendAnalyzeRequest(this.refs.link.value))
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Header)