import React from 'react'
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import './Tasks.css'

class Tasks extends React.Component {
  render() {
    return (
      <NavDropdown title={<span><i className="fa fa-tasks fa-fw"><div className="alertCount">4</div></i> </span>} id = 'navDropdown2222'>
       <MenuItem eventKey="1" style={ {width: 300} }>
         <div>
           <p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p>
           <div>
             <ProgressBar  bsStyle="success" now={40} />
           </div>
         </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="2">
         <div>
           <p> <strong>Task 2</strong> <span className="pull-right text-muted">20% Complete</span> </p>
           <div>
             <ProgressBar  bsStyle="info" now={20} />
           </div>
         </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="3">
         <div>
           <p> <strong>Task 3</strong> <span className="pull-right text-muted">60% Complete</span> </p>
           <div>
             <ProgressBar  bsStyle="warning" now={60} />
           </div>
         </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="4">
         <div>
           <p> <strong>Task 4</strong> <span className="pull-right text-muted">80% Complete</span> </p>
           <div>
             <ProgressBar  bsStyle="danger" now={80} />
           </div>
         </div>
       </MenuItem>
       <MenuItem divider />
       <MenuItem eventKey="5">
           <strong>See All Tasks</strong> <i className="fa fa-angle-right"></i>
       </MenuItem>
     </NavDropdown>
    );
  }
}

export default Tasks;
