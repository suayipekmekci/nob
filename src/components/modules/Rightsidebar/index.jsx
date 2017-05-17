import React from 'react';
import {
    Button,
    Modal,
    Col
} from 'react-bootstrap';
import './style.css'

const MyComponent = React.createClass({
    getInitialState() {
        return {showSignInModal: false,toggleRight:false};
    },
    componentDidMount: function () {
      window.addEventListener('mousedown', this.helpSidebar, false);
    },
    helpSidebar: function (e) {
      if(e.target.classList.contains('helpSidebar') === true){
        console.log(true);
        this.setState({showSignInModal: true});
      }
    },
    close() {
        this.setState({showSignInModal: false});
    },

    open() {
        this.setState({showSignInModal: true});
    },
    render() {
        return (
            <div>
                <Modal className="modal right fade" show={this.state.showSignInModal} onHide={this.close}>
                  <Modal.Header>
                    <div className="modalCloseButton" onClick={this.close}>
                      <i className="fa fa-window-close-o closeModalButton rightModalClose" aria-hidden="true"></i>
                      </div>
                      <Modal.Title className="modalNTitle t-a-c">Nobitsy Help</Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                          Right Sidebar
                          </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
})

export default MyComponent;
