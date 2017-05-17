import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import  withStyle  from 'react-with-style';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend , ResponsiveContainer} from 'recharts';

import s from './style.css';

class BarChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      barChartData:[]
    };
  }
  componentDidMount(){
    axios
    .get(this.props.dataUrl)
    .then(({data})=> {
    	this.setState({
        barChartData:data
      });
    })
    .catch((err)=> {
    })
  }
  render() {
    if(this.state.barChartData){
      return (
        <div className="lineChartContainer">
          <ResponsiveContainer>
            <BarChart data={this.state.barChartData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
             <XAxis dataKey="name"/>
             <YAxis/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Bar dataKey="pv" fill="#8884d8" />
             <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
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

export default withStyle(s)(BarChartContainer);
