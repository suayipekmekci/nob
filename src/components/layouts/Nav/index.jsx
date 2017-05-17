import React, {PropTypes} from 'react';
import HeadTop from '../HeadTop';
import HeadBottom from '../HeadBottom';
import Footer from '../Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {createHashHistory,createHistory,useBasename} from 'history';

const Header = React.createClass({
  render: function() {
    if(this.props.routes[1].key == "not"){
      return (
        <div id="nofoundContainer">
          <div id="nofoundInner">
            {this.props.children}
          </div>
          <img id="bgImage" src={require("../../../common/images/homeShowCase.png")}/>
        </div>
      );
    }else{
      return (
        <div id="pageMainContainer">
          <HeadTop/>
          <div className="clearfix"></div>
          <HeadBottom/>
          <div id="mainContent">
            <ReactCSSTransitionGroup component="div" transitionName="ng" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              {React.cloneElement(
                <div className="col-sm-12" id="pageInnerContent">{this.props.children}</div>
              )}
            </ReactCSSTransitionGroup>
            <div className="clearfix"></div>
          </div>
          <Footer/>
        </div>
      );
    }
  }
});

export default Header;
