import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route, DefaultRoute, RouteHandler } from "react-router";

class Base extends React.Component {
  render() {
    console.log("0");
  	const { pathname } = this.props.location;

    if(pathname.substr(0, 10) == '/dashboard'){
      var change = 'internal';
    }else{
      var change = pathname;
    }
    if(this.props.children){
      console.log(2);
    	return (
        <div className="ui-view">
          <div className="ui-base">
            <div>{this.props.children}</div>
          </div>
        </div>
      );
    }else{
      console.log(1);
    }
  }

}

export default Base;
