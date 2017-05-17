import React from 'react'
import { Router, Link } from 'react-router';
import './style.scss'

class Head extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
      selectedUserNav: this.props.active
		}
	}
  isActive(value){
    return ((value===this.state.selectedUserNav) ?'active':'');
  }
  render() {
    return (
      <div id="UserTop" className="col-sm-12">
          <div className="col-sm-12">
            <ul id="UserLeftList">
              <li className={this.isActive("Users")}><Link to="/Users">Users</Link></li>
            </ul>
          </div>
          <div className="clearfix"></div>
      </div>
    );
  }
}
/*
class Head extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
      selectedUserNav: this.props.active
		}
	}
  isActive(value){
    return ((value===this.state.selectedUserNav) ?'active':'');
  }
  render() {
    return (
      <div id="UserTop" className="col-sm-12">
          <div className="col-sm-12">
            <ul id="UserLeftList">
              <li className={this.isActive("Users")}><Link to="/Users">Users</Link></li>
              <li className={this.isActive("Groups")}><Link to="/Groups">Groups</Link></li>
              <li className={this.isActive("Roles")}><Link to="/Roles">Roles</Link></li>
            </ul>
          </div>
          <div className="clearfix"></div>
      </div>
    );
  }
}*/

export default Head;
