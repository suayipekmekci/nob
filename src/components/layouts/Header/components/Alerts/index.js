import React from 'react'
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import './Alerts.css'

class Alerts extends React.Component {
  render() {
    return (
      <NavDropdown title={<i className="fa fa-bell fa-fw"><div className="alertCount">5</div></i>} id = 'navDropdown3'>
       <MenuItem eventKey="1" style={ {width: 300} }>
         <div> <i className="fa fa-comment fa-fw"></i> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="2">
         <div> <i className="fa fa-twitter fa-fw"></i> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="3">
         <div> <i className="fa fa-envelope fa-fw"></i> Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="4">
         <div> <i className="fa fa-tasks fa-fw"></i> New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="5">
         <div> <i className="fa fa-upload fa-fw"></i> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="6">
         <strong>See All Alerts</strong> <i className="fa fa-angle-right"></i>
       </MenuItem>
     </NavDropdown>
    );
  }
}

export default Alerts;
