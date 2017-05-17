import React, {PropTypes} from 'react';
import './style.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {createHashHistory,createHistory,useBasename} from 'history';

const Header = React.createClass({
  render: function() {
    return (
      <div id="pageMainContainer">
        <div id="mainContent">
          <ReactCSSTransitionGroup component="div" transitionName="ng" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {React.cloneElement(
              <div className="col-sm-12" id="pageInnerContent">{this.props.children}</div>
            )}
          </ReactCSSTransitionGroup>
          <div className="clearfix"></div>
        </div>
        <img id="bgImage" src={require("../../../common/images/homeShowCase.png")}/>
      </div>
    );
  }
});

export default Header;
