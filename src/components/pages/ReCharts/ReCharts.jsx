import React, { PropTypes, Component } from 'react';
import Panel from '../../modules/Panel';
import LineChart from '../../modules/ReCharts/LineChart';
import BarChart from '../../modules/ReCharts/BarChart';
import PieChartV1 from '../../modules/ReCharts/PieChart/v-1';
import PieChartV2 from '../../modules/ReCharts/PieChart/v-2';

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
          <LineChart dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/linechart.json"/>
        </Panel>
        <Panel icon="fa fa-bar-chart" title="Bar Chart" gridsize="col-md-12">
          <BarChart title="Bar Chart" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/linechart.json"/>
        </Panel>
        <Panel icon="fa fa-pie-chart" title="Pie Chart" gridsize="col-md-6">
          <PieChartV1 title="Pie Chart-1" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/piechart.json"/>
        </Panel>
        <Panel icon="fa fa-pie-chart" title="Pie Chart" gridsize="col-md-6">
          <PieChartV2 title="Pie Chart-2" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/piechart.json"/>
        </Panel>
      </div>
    );
  }
}

export default MyComponent;
