import React from 'react'
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './style.css'
const cellEditProp = {
  mode: 'click'
};
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products:[]
    };
  }
  componentWillMount() {
    axios
      .get(this.props.dataUrl)
      .then(({data})=> {
      	this.setState({products: data});
      })
      .catch((err)=> {
        console.log(err);
      })
  }
  componentDidMount(){

  }
  render() {
    if(this.state.products.length == 0) {
      return (
        <div>Please wait...</div>
     );
    }else{
      return (
        <BootstrapTable
          exportCSV={this.props.dataEexport}
          data={ this.state.products }
          pagination={ this.props.dataPagination }
          search={ this.props.dataSearch}
          >
          <TableHeaderColumn width='10%' dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='10%' dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn width='10%' dataField='price' dataSort={ true }>Product Price</TableHeaderColumn>
        </BootstrapTable>
     );
    }
  }
}

export default Table;
