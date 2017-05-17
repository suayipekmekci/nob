import React from 'react'

import DatePicker from "./components/DateChange";
import Message from "./components/Messages";
import Tasks from "./components/Tasks";
import Alerts from "./components/Alerts";
import User from "./components/User";

import $ from "jQuery";
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div id="headerContainer">
      <div className="headerLogo"><img src={require("../../../common/images/logo-header.png")}/></div>
        <ul className="nav navbar-top-links navbar-right pull-right">
            <DatePicker/>
            <Message/>
            <Tasks/>
            <Alerts/>
            <User/>
        </ul>
      </div>
    );
  }
}

function toggleMenu(){
  if($(".navbar-collapse").hasClass('collapse')){
    $(".navbar-collapse").removeClass('collapse');
  }else{
    $(".navbar-collapse").addClass('collapse');
  }
}

export default Header;
