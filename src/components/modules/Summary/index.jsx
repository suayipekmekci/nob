import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import SelectBox from '../SelectBox';
import withStyle  from 'react-with-style';
import Spinner from '../ContentLoading';

import Loading from 'react-loading-spinner';
import 'react-loading-spinner/src/css/index.css';
import s from './style.css';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customLoading: true
    }
    this.updateSummary = this.updateSummary.bind(this)
  }
  componentWillMount() {
    this.setState({
      customLoading: true,
    })
  }
  componentDidMount(){
    axios
      .get(this.props.dataUrl)
      .then(({data})=> {
      	this.setState({
          selectboxData: data.list,
          name: data.name,
          value: data.value,
          iconName: data.iconName,
          trendIcon: data.trendIcon,
          trendValue: data.trendValue,
          selectedItem: data.selectedid
        });
      })
      .catch((err)=> {})
      setTimeout(() => {
        this.setState({
          customLoading: false,
        })
      }, 2000);
  }
  updateSummary (data) {
    this.setState({
      selectValue: data,
    })
  }
  render() {
    return(
      <div className={this.props.gridsize}>
        <div className="rad-info-box">
          <Loading isLoading={this.state.customLoading} loadingClassName='loading' spinner={Spinner}>
            <div>
              <div className="summaryBigIcon">
                <i className={this.state.iconName}></i>
              </div>
              <div className="heading">{this.state.name} + {this.state.selectValue}</div>
              <div className="value"><div>{this.state.value}</div></div>
              <div className="trend">
                <div className="summarySelectBox">
                  <SelectBox onUpdate={this.updateSummary} selectedItems={this.state.selectedItem} data={this.state.selectboxData}/>
                </div>
                <div className="trendPercent pull-right"> {this.state.trendValue}</div>
                <i className={this.state.trendIcon}></i>
                <div className="clearfix"></div>
              </div>
            </div>
          </Loading>
        </div>
      </div>
    );
  }
}

export default withStyle(s)(Summary);
