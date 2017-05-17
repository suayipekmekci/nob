import React, { PropTypes, Component } from 'react';
import Panel from '../../modules/Panel';
import ArcsExample from '../../modules/DataMaps/arcs-example';
import BasicExample from '../../modules/DataMaps/basic-example';
import BubblesExample from '../../modules/DataMaps/bubbles-example';
import ChoroplethExample from '../../modules/DataMaps/choropleth-example';
import ProjectionsGraticulesExample from '../../modules/DataMaps/projections-graticules-example';
import ResponsiveExample from '../../modules/DataMaps/responsive-example';
import StateLabelsExample from '../../modules/DataMaps/state-labels-example';
import ZoomExample from '../../modules/DataMaps/zoom-example';

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
        <Panel icon="fa fa-map" title="Basic Map" gridsize="col-md-6">
          <BasicExample/>
        </Panel>
        <Panel icon="fa fa-map" title="Choropleth Map" gridsize="col-md-6">
  				<ChoroplethExample/>
        </Panel>
        <Panel icon="fa fa-map" title="State Labels Map" gridsize="col-md-6">
  				<StateLabelsExample/>
        </Panel>
        <Panel icon="fa fa-map" title="Bubble Map" gridsize="col-md-6">
  				<BubblesExample/>
        </Panel>
        <Panel icon="fa fa-map" title="Arcs Map" gridsize="col-md-6">
  				<ArcsExample/>
        </Panel>
        <Panel icon="fa fa-map" title="Responsive Map" gridsize="col-md-6">
  				<ResponsiveExample/>
        </Panel>
        <Panel icon="fa fa-map" title="Projections Graticules Map" gridsize="col-md-6">
  				<ProjectionsGraticulesExample/>
        </Panel>
        <Panel icon="fa fa-map" title="Zoom Map" gridsize="col-md-6">
  				<ZoomExample/>
        </Panel>
      </div>
    );
  }
}

export default MyComponent;
