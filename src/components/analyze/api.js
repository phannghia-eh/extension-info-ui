import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'

class API extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        columns: [
          {
            Header: 'API',
            maxWidth: 200,
            accessor: 'api'
          },
          {
            Header: 'Behavior',
            accessor: 'behavior',
            style: {'whiteSpace': 'unset'}
          },
          {
            Header: 'Risk',
            maxWidth: 200,
            accessor: 'risk',
            style: {'whiteSpace': 'unset'},
            Cell: row => {
              switch (row.original.risk) {
                case 'Low risk':
                  return <div className='text-black-50'>Low Risk</div>
                case 'Medium risk':
                  return <div className='text-warning'>Medium Risk</div>
                case 'High risk':
                  return <div className='text-danger'>High Risk</div>
              }
            }
          },
        ]
      }
    }
  }

  render() {
    const rawApiData = this.props.analyze.result.api
    const apiData = Object.keys(rawApiData).map(i => {
      return Object.assign({}, {api: i}, rawApiData[i])
    })
    console.log(apiData)
    return (
      <ReactTable
        showPaginationBottom={false}
        defaultPageSize={apiData ? apiData.length : 5}
        data={apiData}
        columns={this.state.table.columns}/>
    )
  }

}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(API)