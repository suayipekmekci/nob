import React from 'react'
import { Router, Link } from 'react-router';
import {
    OverlayTrigger,
    Popover
} from 'react-bootstrap';
import Rightsidebar from '../../modules/Rightsidebar'
import ChangeTheme from '../../modules/ChangeTheme'
import PostModule from '../../modules/Post';
import './style.scss'

let changeS= "day";

class Head extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			toggle: false,
      selected: window.location.hash.split('/')[1],
		}
	}
  toogleRightSidebar(code){
    this.setState({toggle: code});
  }
  changeTopNavClass(code){
    this.setState({selected  : code})
  }
  isActive(value){
    return 'topNavItem '+((value===this.state.selected) ?'activeColor':'');
  }
  logout(){
    PostModule.delete_cookie("access_token");
  }
  render() {
    return (
      <div id="headerTop" className="col-sm-12">
          <Rightsidebar toggleRight={this.state.toggle}/>
          <div className="col-sm-4">
            <div id="headerLogo">
              <img src={require("../../../common/images/nobitsyLogo.png")}/>
            </div>
          </div>
          <div className="col-sm-8 headerRight">
            <ul id="headerRightList">
              <li>
                <ChangeTheme/>
              </li>
              <li className={this.isActive("")} onClick={this.changeTopNavClass.bind(this, "")}>
                <Link to="/">My Dashboard</Link>
              </li>
              <li className={this.isActive("Users")} onClick={this.changeTopNavClass.bind(this, "Users")}>
                <Link to="/Users">Users</Link>
              </li>
              <li>
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={
                  <Popover id="popover-trigger-click-root-close">
                      <div className="popoverItem">Account</div>
                      <div className="popoverItem">What's New</div>
                      <div className="popoverItem">Help</div>
                      <div className="popoverItem" onClick={this.logout}>Sign Out</div>
                  </Popover>
                  }>
                    <div><span id="userHeaderName"></span> <i className="arrowdefault fa fa-chevron-down"></i></div>
                </OverlayTrigger>
              </li>
              <li onClick={this.toogleRightSidebar.bind(this, true)}>
                <i className="fa fa-question-circle helpSidebar"></i>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
      </div>
    );
  }
}

//export default Head;
export default Head;
