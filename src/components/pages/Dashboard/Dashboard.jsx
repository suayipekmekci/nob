import React from 'react';
import update from 'react-addons-update';
import {
    Button,
    Modal,
    FormGroup,
    Col,
    Row,
    FormControl,
    HelpBlock,
    ControlLabel
} from 'react-bootstrap';
import NoDashboard from '../../modules/NoDashboard';
import Leftsidebar from '../../modules/Leftsidebar';
import PostModule from '../../modules/Post';
import NProgress from 'nProgress';
NProgress.configure({showSpinner: false});

const Welcome = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
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
                <Modal className="modalBigMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                    <Modal.Header>
                        <div className="modalCloseButton" onClick={this.close}>
                          <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                          </div>
                        <Modal.Title className="modalNTitle">
                            <Col sm={11} className="m-b-25">asdasdWelcome to Nobitsy!</Col>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                            <div className="pull-left modalLeftImage">
                                <img src={require("../../../common/images/nobitsyLogo.png")}/>
                            </div>
                            <div className="pull-left modalRText">Nobitsy is a dashboard app for teams that want to continuously monitor the health and performance of their business.</div>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="link" onClick={this.clickSignIn.bind(this, 2)}>Next</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
})

const DahboardGallery = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
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
                <Modal className="modalBigMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                    <Modal.Header>
                        <div className="modalCloseButton" onClick={this.close}>
                          <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                          </div>
                        <Modal.Title className="modalNTitle">
                            <Col sm={11} className="m-b-25">It helps to get started with a great dashboard.</Col>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                            <div className="pull-left modalText m-b-20">The
                                <span className="bold">Dashboard Gallery</span>
                                has a selection of pre-built dashboards to get you up and running fast.</div>
                            <Button className="w-100" bsStyle="primary">Get a Dashboard from the Dashboard Gallery</Button>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="pull-right" bsStyle="link" onClick={this.clickSignIn.bind(this, 3)}>Next</Button>
                        <Button className="pull-right btn-back m-r-15" onClick={this.clickSignIn.bind(this, 1)}>Back</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
})

const DahboardClick = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
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
                <Modal className="modalBigMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                    <Modal.Header>
                        <div className="modalCloseButton" onClick={this.close}>
                          <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                          </div>
                        <Modal.Title className="modalNTitle">
                            <Col sm={11} className="m-b-25">More dashboards are just a click away.</Col>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                            <div className="pull-left modalLeftImage">
                                <img src={require("../../../common/images/clickDashboard.jpg")}/>
                            </div>
                            <div className="pull-left modalRBText">Use this button at the top right of your screen to get more dashboards from your account library or the
                                <a href="#">Dashboard Gallery</a>.</div>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="pull-right" bsStyle="link" onClick={this.clickSignIn.bind(this, 4)}>Next</Button>
                        <Button className="pull-right btn-back m-r-15" onClick={this.clickSignIn.bind(this, 2)}>Back</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
})

const DahboardGuide = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
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
                <Modal className="modalBigMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                    <Modal.Header>
                        <div className="modalCloseButton" onClick={this.close}>
                          <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                          </div>
                        <Modal.Title className="modalNTitle">
                            <Col sm={11} className="m-b-25">When you’re ready, you can create your own dashboards.</Col>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                            <div className="pull-left modalText m-b-15">1. Assemble dashboards using awesome pre-built Klips from the Klip Gallery. Add a blank dashboard to get started.</div>
                            <div className="pull-left modalText m-b-20">2. Build your own Klips from scratch using your own data. See the <a href="#" className="bold">Dashboard Journey Guide</a>
                                to get started!</div>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="pull-right" bsStyle="link" onClick={this.close}>Finished</Button>
                        <Button className="pull-right btn-back m-r-15" onClick={this.clickSignIn.bind(this, 3)}>Back</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
})

const MyComponent = React.createClass({
    getInitialState() {
        return {showModal: 1};
    },
    componentWillMount() {
        NProgress.start();
      },
    componentDidMount() {
        NProgress.done();
    },
    changeModal(data) {
        this.setState({showModal: data});
    },
    render() {
        if (this.state.showModal == 1) {
            return (
                <div>
                    <NoDashboard/>
                    <Welcome changeModalUpdate={this.changeModal}/>
                </div>
            )
        } else if (this.state.showModal == 2) {
            return (
                <div>
                    <NoDashboard/>
                    <DahboardGallery changeModalUpdate={this.changeModal}/>
                </div>
            )
        } else if (this.state.showModal == 3) {
            return (
                <div>
                    <NoDashboard/>
                    <DahboardClick changeModalUpdate={this.changeModal}/>
                </div>
            )
        } else if (this.state.showModal == 4) {
            return (
                <div>
                    <NoDashboard/>
                    <DahboardGuide changeModalUpdate={this.changeModal}/>
                </div>
            )
        }
    }
})

export default MyComponent;
