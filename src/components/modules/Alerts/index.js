import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './style.css'

class Alerts extends React.Component {
  render() {
    return (
      <ListGroup className="alertList">
       <ListGroupItem>
         <div className="alertlistItem"><i className="fa fa-comment fa-fw"></i> 5 New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </ListGroupItem>
       <ListGroupItem>
         <div className="alertlistItem"><i className="fa fa-twitter fa-fw"></i> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
       </ListGroupItem>
       <ListGroupItem>
         <div className="alertlistItem"><i className="fa fa-envelope fa-fw"></i> 1 Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </ListGroupItem>
       <ListGroupItem>
         <div className="alertlistItem"><i className="fa fa-tasks fa-fw"></i> 10 New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </ListGroupItem>
       <ListGroupItem>
         <div className="alertlistItem"><i className="fa fa-upload fa-fw"></i> 2 Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
       </ListGroupItem>
       <ListGroupItem>
         <strong>See All Alerts</strong> <i className="fa fa-angle-right"></i>
       </ListGroupItem>
     </ListGroup>
    );
  }
}

export default Alerts;
