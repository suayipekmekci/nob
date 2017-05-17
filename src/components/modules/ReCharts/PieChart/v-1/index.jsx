import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import  withStyle  from 'react-with-style';

import { PieChart, Pie, Sector , ResponsiveContainer} from 'recharts';

import s from './style.css';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

var PieChartContainer = React.createClass({
  getInitialState() {
    return {
      activeIndex: 0,
      pieChartData:[]
    };
  },
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
  },
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  },
  render: function() {
    if(this.state.pieChartData){
      return (
        <div className="lineChartContainer">
          <ResponsiveContainer>
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
            	activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={this.state.pieChartData}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"/>
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

});

export default withStyle(s)(PieChartContainer);
