import {connect} from "react-redux";
import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import ReactTable from 'react-table'
import Header from "./Layout/header";
import SideBar from "./Layout/sidebar";

class Result extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {
        "perms_avg": 2,
        "perms_highest": {"name": ["Mesa de Operacoes"], "quantity": 44},
        "warn_perms_avg": 1,
        "top_perms": [["tabs", 113018], ["storage", 87142], ["activeTab", 34912], ["<all_urls>", 34294], ["cookies", 31137], ["notifications", 30503], ["contextMenus", 26721], ["http://*/*", 26186], ["https://*/*", 24906], ["webRequest", 23852]],
        "top_warn_perms": [["tabs", 113018], ["<all_urls>", 34294], ["notifications", 30503], ["http://*/*", 26186], ["https://*/*", 24906], ["management", 22383], ["topSites", 19464], ["webNavigation", 12138], ["*://*/*", 6920], ["bookmarks", 6141]],
        "analyzed_ext": 280331,
        "above_50": 9407,
        "above_30": 11704,
        "above_15": 111811,
        "below_15": 70263
      },
      columns: [
        {
          Header: 'Criteria',
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

    const pieChartData = {
      labels: [
        'above_50',
        "above_30",
        "above_15",
        "below_15"
      ],
      datasets: [
        {
          data: [9407, 11704, 111811, 70263],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#61ff73'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#61ff73'
          ]
        }
      ],
      position: "bottom"
    }
    console.log(top_perms_table, top_warn_perms_table)
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <SideBar/>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="unstarted-dashboard">

                <div className="row">
                  <div className="col-md-4">
                    <h4>Permissions Average: <span>{this.state.data.perms_avg}</span></h4>
                  </div>
                  <div className="col-md-4">
                    <h4>Extension Request The Most Permissions:</h4>
                    <h6>{this.state.data.perms_highest.name}: <span>{this.state.data.perms_highest.quantity}</span></h6>
                  </div>
                  <div className="col-md-4">
                    <h4>Number Of Permission Got Warning: <span>{this.state.data.warn_perms_avg}</span></h4>
                  </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                  <div className="col-md-6">
                    <center><h3>top 10 permission</h3></center>
                    <ReactTable className="table table-bordered"
                                data={top_perms_table}
                                defaultPageSize={top_perms_table.length}
                                showPagination={false}
                                columns={this.state.columns}/>
                  </div>
                  <div className="col-md-6">
                    <center><h3>top 10 permission có warning</h3></center>
                    <ReactTable className="table table-light"
                                data={top_warn_perms_table}
                                defaultPageSize={top_warn_perms_table.length}
                                showPagination={false}
                                columns={this.state.columns}/>
                  </div>
                </div>

                <Pie data={pieChartData}
                     legend={{position: 'bottom'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Result)