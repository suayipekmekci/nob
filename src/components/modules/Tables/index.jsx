import React from 'react'
import axios from 'axios';
Checkbox
import {Checkbox} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PostModule from '../Post';
import './style.css'
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true
};

const idRowProp = {
  hideSelectColumn: true
};

//<button className="m-l-10 PanelButton btn btn-sm btn-success" onClick={this.getEditRowKeys.bind(this)}>Edit</button>
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products:this.props.fulldata
    };
  }
  componentWillMount() {
    console.log(this.props.add);
  }
  componentDidMount(){

  }
  getEditRowKeys() {
    var editItem = this.refs.table.state.selectedRowKeys;
    if(editItem.length == 1){

    }
    var postParams = {
      "access_token": PostModule.accessTokenParams()
    }
    PostModule.postType("http://52.48.0.60/api/user/"+editItem,postParams).then((successMessage) => {
    //  this.forceUpdate()
    });
  }
  customConfirm(next, dropRowKeys) {
    var postParams = {
      "access_token": PostModule.accessTokenParams(),
      "id[]": dropRowKeys
    }

   PostModule.postType("http://52.48.0.60/api/user/updateActivity",postParams).then((successMessage) => {
      next();
    });
  }
  render() {
    const options = {
       handleConfirmDeleteRow: this.customConfirm
     };
    if(this.state.products.length == 0) {
      return (
        <div></div>
     );
    }else{
      return (
        <div>
          <BootstrapTable
            exportCSV={this.props.dataEexport}
            data={ this.state.products }
            pagination={ this.props.dataPagination }
            search={ this.props.dataSearch}
            selectRow={ selectRowProp }
            options={ options }
            deleteRow
            ref='table'
            >
            <TableHeaderColumn width='32%' hidden dataField='id' isKey={ true } dataSort={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn width='32%' dataField='name' dataSort={ true }>Name</TableHeaderColumn>
            <TableHeaderColumn width='32%' dataField='surname' dataSort={ true }>Surname</TableHeaderColumn>
            <TableHeaderColumn width='32%' dataField='email' dataSort={ true }>Email</TableHeaderColumn>
          </BootstrapTable>
        </div>
     );
    }
  }
}

export default Table;
