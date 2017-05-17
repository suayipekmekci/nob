import React from 'react';
import {SideNav, Nav} from 'react-sidenav';
import HeaderLayout from '../../layouts/Header';
import PageHeader from '../../layouts/PageHeader';
import Dashboard2 from '../Dashboard2';
import {createHashHistory,createHistory,useBasename} from 'history';

import './Sidebar.css'

import NProgress from 'nProgress';
NProgress.configure({ showSpinner: false });

const history = useBasename(createHistory)({
   queryKey: false,
  basename: '/'
})
var navi = [
  {
    id: 'Dashboard',
    icon: 'fa fa-dashboard',
    text: 'Dashboard'
  },{
    id: 'Tables',
    icon: 'fa fa-table',
    text: 'Tables'
  },{
    id: 'Maps',
    icon: 'fa fa-map',
    text: 'Maps'
  },{
    id: 'Charts',
    icon: 'fa Example of bar-chart fa-bar-chart',
    text: 'Charts',
    navlist: [
      {
        id: 'GoogleCharts',
        icon: 'fa fa-area-chart',
        text: 'GoogleCharts'
      }, {
        id: 'ReCharts',
        icon: 'fa fa-line-chart',
        text: 'ReCharts'
      }
    ]
  }
];

const selected = '';

const MyComponent = React.createClass({
  onSelection(selection) {
    this.setState({selected: selection.id});
    history.push(selection.id)
  },
  getInitialState: function() {
    return {
      childVisible: false,
      selected: this.props.location.pathname.split('/')[1]
    };
  },
  sidebarHide: function() {
    this.setState({ childVisible: false });
  },
  sidebarShow: function() {
    this.setState({ childVisible: true });
  },
  render: function() {
    return (
      <div id="pageMainContainer">
        <div id="mainNavBarContainer" className={this.state.childVisible ? "" : "sideActive"}>
          <div className="sidebartoogle">
            <div id="sidebarNavIcon" onClick={this.handleClick} className={this.state.childVisible ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id="logo"><img src={require("../../../common/images/logo.png")}/></div>
          </div>
          <div id="navBarContainer">
            <SideNav onClick={this.handleClick} navs={navi} onSelection={this.onSelection} href={selected.to} selected={this.state.selected}/>
          </div>
        </div>
        <div>
          <HeaderLayout/>
        </div>
        <div id="mainContent" onClick={this.sidebarHide}>
          <div className="col-sm-12 main ng-scope ui-view" id="pageInner">
            <PageHeader/>
            <div className="col-sm-12" id="pageInnerContent">
              <Dashboard2/>
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleClick: function() {
    this.setState({
      childVisible: !this.state.childVisible,
    });
  }
});

export default MyComponent;
