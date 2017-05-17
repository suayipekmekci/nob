import React from 'react';
import {
    Button,
    Modal,
    Col
} from 'react-bootstrap';
import './style.css'

const MyComponent = React.createClass({
    getInitialState() {
        return {showSignInModal: false};
    },

    close() {
        this.setState({showSignInModal: false});
    },

    open() {
        this.setState({showSignInModal: true});
    },
    clickSignIn(code) {
        this.props.changeModalUpdate(code)
    },
    render() {
        return (
            <div>
              <Button bsStyle="primary" bsSize="large" onClick={this.open}>Launch demo modal</Button>
                <Modal className="modal left fade" show={this.state.showSignInModal} onHide={this.close}>
                  <Modal.Header className="m-h-40">
                    <div className="modalCloseButton" onClick={this.close}><i className="fa fa-times closeModalButton leftModalClose" aria-hidden="true"></i></div>
                  </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                          Left Sidebar
                          </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
})

export default MyComponent;
