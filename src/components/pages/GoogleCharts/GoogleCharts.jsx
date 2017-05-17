import React, { PropTypes, Component } from 'react';
import Panel from '../../modules/Panel';
import GoogleChart from '../../modules/GoogleCharts';

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
        <Panel icon="fa fa-line-chart" title="Line Chart" gridsize="col-md-12">
          <GoogleChart title="Line Chart" chartType="LineChart" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/googlechart.json"/>
        </Panel>
        <Panel icon="fa fa-area-chart" title="Area Chart" gridsize="col-md-12">
          <GoogleChart title="Area Chart" chartType="AreaChart" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/googlechart.json"/>
        </Panel>
        <Panel icon="fa fa-area-chart" title="Stepped Area Chart" gridsize="col-md-12">
          <GoogleChart title="Stepped Area Chart" chartType="SteppedAreaChart" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/googlechart.json"/>
        </Panel>
        <Panel icon="fa fa-bar-chart" title="Bar Chart" gridsize="col-md-12">
          <GoogleChart title="Bar Chart" chartType="BarChart" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/googlechart.json"/>
        </Panel>
        <Panel icon="fa fa-circle" title="Scatter Chart" gridsize="col-md-12">
          <GoogleChart title="Scatter Chart" chartType="ScatterChart" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/googlechart.json"/>
        </Panel>
      </div>
    );
  }
}

export default MyComponent;
