import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import {Chart} from 'react-google-charts';

class ScatterChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        googleChartData:[]
    };
  }
  componentDidMount(){
    axios
      .get(this.props.dataUrl)
      .then(({data})=> {
      	this.setState({
          googleChartData:data
        });
      })
      .catch((err)=> {
      })
    }

  render() {
    if(this.state.googleChartData){
      return (
        <div className="googlelineChartContainer">
          <Chart
            chartType={this.props.chartType}
            data={this.state.googleChartData}
            options={{}}
            width="100%"
            height="400px"
            legend_toggle
           />
        </div>
      );
    }else{
      return (
        <div>test</div>
      );
    }
  }
};

export default ScatterChart;
