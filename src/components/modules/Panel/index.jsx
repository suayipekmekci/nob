import React from 'react'
import {Popover, Button, ButtonToolbar, OverlayTrigger} from 'react-bootstrap';
import { Router, Link } from 'react-router';
import Spinner from '../ContentLoading';

import Loading from 'react-loading-spinner';
import 'react-loading-spinner/src/css/index.css';
import './style.scss'

class MyPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      customLoading: true,
    }
  }
  componentWillMount() {
    this.setState({
      customLoading: true,
    })
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        customLoading: false,
      })
    }, 2000);
  }
  render() {
    return (
      <div className={this.props.gridsize}>
        <div className="lineContend">
          <div style={{display: this.props.hidetitle ? 'none' : 'block' }} className="boxTitle m-b-15">
            <i className={this.props.icon}></i>{this.props.title}
              <Link to={this.props.buttonLink}>
                <Button className="PanelButton pull-right" style={{display: this.props.buttonHide ? 'none' : 'block' }} bsStyle="warning" bsSize="small">{this.props.buttonName}</Button>
              </Link>
            </div>
            <Loading isLoading={this.state.customLoading} loadingClassName='loading' spinner={Spinner}>
              <div>
              <div className="boxInner">{this.props.children}</div>
              </div>
            </Loading>
          <div className="panelFooterTitle">{this.props.footerTitle}</div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default MyPanel;
