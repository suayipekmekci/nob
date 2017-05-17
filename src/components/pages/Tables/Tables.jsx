import React, { PropTypes, Component } from 'react';
import Panel from '../../modules/Panel';
import Table from '../../modules/Table';

import NProgress from 'nProgress';
NProgress.configure({ showSpinner: false });

class MyComponent extends React.Component {
  componentWillMount() {
    NProgress.start();
  }
  componentDidMount() {
    NProgress.done();
  }
  render() {
    return (
      <div>
        <Panel icon="fa fa-table" title="Advanced DataTable" gridsize="col-md-12">
          <Table dataEexport={false} dataPagination={true} dataSearch={true} dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/table.json"/>
        </Panel>
        <Panel icon="fa fa-table" title="Pagination Table" gridsize="col-md-6">
          <Table dataEexport={false} dataPagination={true} dataSearch={false} dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/table.json"/>
        </Panel>
        <Panel icon="fa fa-table" title="Basic Table" gridsize="col-md-6">
          <Table dataEexport={false} dataPagination={false} dataSearch={false} dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/basictable.json"/>
        </Panel>
        <Panel icon="fa fa-table" title="Edit Table" gridsize="col-md-6">
          <Table dataEexport={true} dataPagination={false} dataSearch={false} dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/basictable.json"/>
        </Panel>
        <Panel icon="fa fa-table" title="Searc Table" gridsize="col-md-6">
          <Table dataEexport={false} dataPagination={false} dataSearch={true} dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/basictable.json"/>
        </Panel>
      </div>
    );
  }
}

export default MyComponent;
