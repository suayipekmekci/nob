import React from 'react'
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import './User.css'

class User extends React.Component {
  render() {
    return (
      <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
         <MenuItem eventKey="1">
           <span> <i className="fa fa-user fa-fw"></i> User Profile </span>
         </MenuItem>
         <MenuItem eventKey="2">
           <span><i className="fa fa-gear fa-fw"></i> Settings </span>
         </MenuItem>
         <MenuItem className="dividerLine" eventKey = "4">
           <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
         </MenuItem>
       </NavDropdown>
    );
  }
}

export default User;
