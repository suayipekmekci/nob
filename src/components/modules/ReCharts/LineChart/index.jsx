import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import  withStyle  from 'react-with-style';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend , ResponsiveContainer} from 'recharts';

import s from './style.css';

class LineChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lineChartData:[]
    };
  }
  componentDidMount(){
    axios
      .get(this.props.dataUrl)
      .then(({data})=> {
      	this.setState({
          lineChartData:data
        });
      })
      .catch((err)=> {
      })
    }
  render() {
    if(this.state.lineChartData){
      return (
        <div className="lineChartContainer">
          <ResponsiveContainer>
          <LineChart data={this.state.lineChartData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }else{
      return (
        <div>test</div>
      );
    }
  }

}

export default withStyle(s)(LineChartContainer);
