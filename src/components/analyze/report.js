import {connect} from "react-redux";
import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import ReactTable from 'react-table'

class Report extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {
        "perms_avg": 2,
        "perms_highest": {"name": ["Mesa de Operacoes"], "quantity": 44},
        "warn_perms_avg": 1,
        "top_perms": [["tabs", 113018], ["storage", 87142], ["activeTab", 34912], ["<all_urls>", 34294], ["cookies", 31137], ["notifications", 30503], ["contextMenus", 26721], ["http://*/*", 26186], ["https://*/*", 24906], ["webRequest", 23852]],
        "top_warn_perms": [["tabs", 113018], ["<all_urls>", 34294], ["notifications", 30503], ["http://*/*", 26186], ["https://*/*", 24906], ["management", 22383], ["topSites", 19464], ["webNavigation", 12138], ["*://*/*", 6920], ["bookmarks", 6141]],
        "analyzed_ext": 280332,
        "above_50": 9407,
        "above_30": 11704,
        "above_15": 111812,
        "below_15": 70263,
        "etc": 77146,
        "api_avg": 5,
        "top_api": [[".append", 144448], [".innerHTML", 140237], [".html", 134245], ["XMLHttpRequest", 131220], [".insertBefore", 126981], ["chrome.runtime", 119876], ["eval", 117679], [".wrap", 114401], [".appendTo", 91455], ["chrome.browserAction", 86496]]
      }
      ,
      columns: [
        {
          Header: 'Permission',
          accessor: 'criteria',
          className: 'text-center'
        },
        {
          Header: 'Quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ],
      api_columns: [
        {
          Header: 'Api',
          accessor: 'criteria',
          className: 'text-center'
        },
        {
          Header: 'Quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ]
    }
  }


  render() {
    const top_perms_table = this.state.data.top_perms.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })

    const top_warn_perms_table = this.state.data.top_warn_perms.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })

    const top_api_table = this.state.data.top_api.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })

    const pieChartData = {
      labels: [
        'above 50',
        "above 30",
        "above 15",
        "below 15",
        'etc'
      ],
      datasets: [
        {
          data: [9407, 11704, 111812, 70263, 77146],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#61ff73',
            '#123543'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#61ff73',
            '#123543'
          ]
        }
      ],
      position: "bottom"
    }
    console.log(top_perms_table, top_warn_perms_table)
    return (
      <div className="unstarted-dashboard">
        <div className="row">
          <div className="col-md-4 justify-content-center">
            <h4>Permissions Average: <span>{this.state.data.perms_avg}</span></h4>
          </div>
          <div className="col-md-4 justify-content-center">
            <h4>Extension Request The Most Permissions:</h4>
            <h6>{this.state.data.perms_highest.name}: <span>{this.state.data.perms_highest.quantity}</span></h6>
          </div>
          <div className="col-md-4 justify-content-center">
            <h4>Permission With Warning Average: <span>{this.state.data.warn_perms_avg}</span></h4>
          </div>
        </div>

        <br/>
        <br/>

        <div className="row">
          <div className="col-md-6">
            <center><h3>Top 10 Permission</h3></center>
            <ReactTable className="table table-bordered"
                        data={top_perms_table}
                        defaultPageSize={top_perms_table.length}
                        showPagination={false}
                        columns={this.state.columns}/>
          </div>
          <div className="col-md-6">
            <center><h3>Top 10 Permission With Warning</h3></center>
            <ReactTable className="table table-light"
                        data={top_warn_perms_table}
                        defaultPageSize={top_warn_perms_table.length}
                        showPagination={false}
                        columns={this.state.columns}/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <h4>Dangerous Api Average: <span>{this.state.data.api_avg}</span></h4>
            <ReactTable
              className="table table-light"
              defaultPageSize={top_warn_perms_table.length}
              showPagination={false}
              data={top_api_table}
              columns={this.state.api_columns}/>
          </div>
          <div className='col-md-8'>
            <Pie data={pieChartData}
                 legend={{position: 'bottom'}}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Report)