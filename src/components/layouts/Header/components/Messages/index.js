import React from 'react'
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import './Messages.css'

class Messages extends React.Component {
  render() {
    return (
      <NavDropdown bsClass="dropdown" title={<span><i className="fa fa-envelope fa-fw"><div className="alertCount">3</div></i></span>} id="navDropdown1">
        <MenuItem eventKey="1">
          <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
          <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="2">
          <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="3">
          <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4" className="text-center">
          <strong>Read All Messages</strong> <i className="fa fa-angle-right"></i>
        </MenuItem>
      </NavDropdown>
    );
  }
}

export default Messages;
