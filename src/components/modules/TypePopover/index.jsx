import React from 'react'
import {
  Popover,
  Button,
  ButtonToolbar,
  OverlayTrigger,
} from 'react-bootstrap';
import './style.css'

const MyPopover = React.createClass({
    render: function () {
        const popoverClickRootClose = (
            <Popover id={this.props.popoverId}>
              {this.props.children}
            </Popover>
        )
        return (
          <li>
          <ButtonToolbar>
            <OverlayTrigger id="headerFilter" trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
              <div className="headerFilterIcon">
                <i className={this.props.popoverIcon}></i>
                <span className="caret"></span>
              </div>
            </OverlayTrigger>
          </ButtonToolbar>
          </li>
        );
    }
});

export default MyPopover;
