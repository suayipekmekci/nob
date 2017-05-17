import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import  withStyle  from 'react-with-style';

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';

import s from './style.css';

class PieChartV2Container extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        pieChartData:[]
      };
    }
    componentDidMount(){
      axios
      .get(this.props.dataUrl)
      .then(({data})=> {
      	this.setState({
          pieChartData:data
        });
      })
      .catch((err)=> {
      })
    }
  render() {
    if(this.state.pieChartData){
      return (
        <div className="lineChartContainer">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={this.state.pieChartData} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
              <Tooltip/>
             </PieChart>
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

export default withStyle(s)(PieChartV2Container);
