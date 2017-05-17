import React, { PropTypes, Component } from 'react';
import SettingNav from '../../../layouts/SettingNav';
import Panel from '../../../modules/Panel';
import Table from '../../../modules/Table';

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
        <SettingNav active="Roles"/>
        <Panel icon="fa fa-table" buttonHide={true} buttonLink="" buttonName="" title="Role Table" gridsize="col-md-12">
          <Table dataEexport={false} dataPagination={true} dataSearch={true} dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/table.json"/>
        </Panel>
      </div>
    );
  }
}

export default MyComponent;
