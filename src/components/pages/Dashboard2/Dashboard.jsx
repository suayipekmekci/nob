import React from 'react';
import Summary from '../../modules/Summary';
import Panel from '../../modules/Panel';
import LineChart from '../../modules/ReCharts/LineChart';
import SparkLineChart from '../../modules/SparkChart/Sparkline';
import SparkMixChart from '../../modules/SparkChart/Sparkmix';
import SparkBarChart from '../../modules/SparkChart/Sparkbar';
import DatePicker from '../../modules/DatePicker';
import Table from '../../modules/Table';
import BasicMap from '../../modules/DataMaps/basic-example';
import AlertList from '../../modules/Alerts';
import ProgressBar from '../../modules/ProgressBar';

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
        <Summary gridsize="col-sm-4" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/summary.json"/>
        <Summary gridsize="col-sm-4" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/summary.json"/>
        <Summary gridsize="col-sm-4" dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/summary.json"/>
        <Panel hidetitle="hide" gridsize="col-md-8">
          <BasicMap/>
        </Panel>
        <Panel hidetitle="hide" gridsize="col-md-4">
          <SparkLineChart random=""/>
        </Panel>
        <Panel hidetitle="hide" gridsize="col-md-4">
          <SparkMixChart random="ok"/>
        </Panel>
        <Panel hidetitle="hide" gridsize="col-md-4">
          <SparkBarChart random=""/>
        </Panel>
        <Panel hidetitle="hide" footerTitle="Report-1" gridsize="col-md-3">
          <ProgressBar strokewidth={2} percentage={61}/>
        </Panel>
        <Panel hidetitle="hide" footerTitle="Report-2" gridsize="col-md-3">
          <ProgressBar strokewidth={3} percentage={82}/>
        </Panel>
        <Panel hidetitle="hide" footerTitle="Report-3" gridsize="col-md-3">
          <ProgressBar strokewidth={4} percentage={43}/>
        </Panel>
        <Panel hidetitle="hide" footerTitle="Report-4" gridsize="col-md-3">
          <ProgressBar strokewidth={5} percentage={36}/>
        </Panel>
        <Panel hidetitle="hide" gridsize="col-md-4">
          <AlertList dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/linechart.json"/>
        </Panel>
        <Panel hidetitle="hide" gridsize="col-md-8">
          <LineChart dataUrl="https://raw.githubusercontent.com/suayipekmekci/data/master/linechart.json"/>
        </Panel>
        <DatePicker inlineStyle=""/>
      </div>
    );
  }
}

export default MyComponent;
