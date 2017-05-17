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
import PostModule from '../../modules/Post';
import NProgress from 'nProgress';
NProgress.configure({showSpinner: false});

/*Login*/
const ModalLogin = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
    },
    close() {
      //  this.setState({showSignInModal: false});
    },
    open() {
        this.setState({showSignInModal: true});
    },
    clickLogin(event) {
      var postParams = PostModule.postParams(event);
      PostModule.verificationPostType("http://52.48.0.60/oauth/access_token",postParams).then((successMessage) => {
        if(successMessage.access_token){
          if(successMessage.access_token !== ""){
            location.hash = "/";
            location.reload();
          }
        }
      });
    },
    render() {
        return (
            <div>
                <Modal className="modalMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                  <Modal.Header/>
                  <form onSubmit={this.clickLogin}>
                    <Modal.Body className="p-t-0">
                        <Col sm={12}>
                          <div className="t-a-c m-b-15">
                              <img className="m-b-15" src={require("../../../common/images/nobitsyLogo.png")}/>
                          </div>
                          <Row className="m-b-15">
                              <Col componentClass={ControlLabel} sm={2}>
                                  Email:
                              </Col>
                              <Col sm={10}>
                                  <FormControl type="email" name="username" placeholder="your@email.com"/>
                              </Col>
                          </Row>
                          <Row className="m-b-15 d-n">
                              <Col componentClass={ControlLabel} sm={2}>
                                  hiddenparams:
                              </Col>
                              <Col sm={10}>
                                  <FormControl type="text" name="grant_type" defaultValue="password"/>
                                  <FormControl type="text" name="client_id" defaultValue="2b5t4ke"/>
                                  <FormControl type="text" name="client_secret" defaultValue="SOME SECRET!!!"/>
                              </Col>
                          </Row>
                          <Row className="m-b-15">
                              <Col componentClass={ControlLabel} sm={2}>
                                  Password:
                              </Col>
                              <Col sm={10}>
                                  <FormControl type="password" name="password"/>
                              </Col>
                          </Row>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="link" type="submit">Login</Button>
                    </Modal.Footer>
                  </form>
                </Modal>
            </div>
        );
    }
})

/*Sign in*/
const ModalEror = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
    },
    componentWillMount() {

    },
    close() {
      //  this.setState({showSignInModal: false});
    },
    open() {
        this.setState({showSignInModal: true});
    },
    changeModal(code) {
        this.props.changeModalUpdate(code)
    },
    render() {
        return (
            <div>
                <Modal className="modalMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                    <Modal.Body>
                        <form onSubmit={this.clickSignIn}>
                            <Col sm={12}>
                                <div className="t-a-c m-b-15 m-t-15">
                                    <img className="m-b-15" src={require("../../../common/images/nobitsyLogo.png")}/>
                                    <div className="modalTitle">Invalid verification link</div>
                                </div>
                            </Col>
                            <Button onClick={this.changeModal.bind(this,1)} className="buttonPassive w-100" type="submit">
                                Login
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
})

/*Sign in*/
const ModalSignIn = React.createClass({
    getInitialState() {
        return {showSignInModal: true};
    },
    componentWillMount() {
    /*  console.log(PostModule.accessParams().length +" - "+PostModule.accessParams() );
      if(PostModule.accessParams().length != 0 && PostModule.accessParams() != "" && PostModule.accessParams() != undefined){
        this.setState({showSignInModal: false});
      }*/
    },
    close() {
      //  this.setState({showSignInModal: false});
    },
    open() {
        this.setState({showSignInModal: true});
    },
    changeModal(code) {
        this.props.changeModalUpdate(code)
    },
    clickSignIn(event) { // burada da tooken geliyor direk giriş olacak
      var postParams = PostModule.invitePostParams(event,PostModule.getVerificationCode());
      PostModule.verificationPostType("http://52.48.0.60/api/account/update",postParams).then((successMessage) => {
        if(successMessage.access_token){
          if(successMessage.access_token !== ""){
            location.hash = "/";
            location.reload();
          }
        }
      });
    },
    render() {
        return (
            <div>
                <Modal className="modalMaxWidth" show={this.state.showSignInModal} onHide={this.close}>
                    <Modal.Body>
                        <form onSubmit={this.clickSignIn}>
                            <Col sm={12}>
                                <div className="t-a-c m-b-15 m-t-15">
                                    <img className="m-b-15" src={require("../../../common/images/nobitsyLogo.png")}/>
                                    <div className="modalTitle">Create your free account and start monitoring the health of your business like a pro</div>
                                </div>
                                <Row className="m-b-15">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Email:
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl readOnly type="email" name="billing_email" id="emailAccount" placeholder="your@email.com"/>
                                    </Col>
                                </Row>
                                <Row className="m-b-15">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Password:
                                    </Col>
                                    <Col sm={10} className="p-0">
                                        <Col sm={6}>
                                            <FormControl type="password" name="password" placeholder="****"/>
                                        </Col>
                                        <Col sm={6}>
                                            <FormControl type="password" name="password_confirmation" placeholder="****"/>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="m-b-15 d-n">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        hiddenparams:
                                    </Col>
                                    <Col sm={10}>
                                      <FormControl type="text" name="grant_type" defaultValue="password"/>
                                      <FormControl type="text" name="client_id" defaultValue="2b5t4ke"/>
                                      <FormControl type="text" name="client_secret" defaultValue="SOME SECRET!!!"/>
                                    </Col>
                                </Row>
                                <Row className="m-b-15">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Name:
                                    </Col>
                                    <Col sm={10} className="p-0">
                                        <Col sm={6}>
                                            <FormControl type="text" name="name" placeholder="First name"/>
                                        </Col>
                                        <Col sm={6}>
                                            <FormControl type="text" name="surname" placeholder="Last name"/>
                                        </Col>
                                    </Col>
                                </Row>
                            </Col>
                            <Button className="buttonPassive w-100" type="submit">
                                Create Account
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
})

const MyComponent = React.createClass({
    getInitialState() {
        return {showModal: 10};
    },
    componentWillMount() {
      var postParams = {
        "invite_token":PostModule.getVerificationCode()
      };
      PostModule.postType("http://52.48.0.60/api/account/checkToken",postParams).then((successMessage) => {
        console.log(successMessage.message);
        if(successMessage.message == "ok"){
          this.changeModal(0)
          document.getElementById("emailAccount").value = successMessage.email;
        }else{
          this.changeModal(2)
        }
      });
        NProgress.start();
      },
    componentDidMount() {
        NProgress.done();
    },
    changeModal(data) {
        this.setState({showModal: data});
    },
    render() {
        if (this.state.showModal == 0) {
            return (
                <div>
                    <ModalSignIn changeModalUpdate={this.changeModal}/>
                </div>
            )
        } else if (this.state.showModal == 1) {
            console.log(1);
            return (
                <div>
                    <ModalLogin changeModalUpdate={this.changeModal}/>
                </div>
            )
        } else if (this.state.showModal == 2) {
            console.log(2);
            return (
                <div>
                    <ModalEror changeModalUpdate={this.changeModal}/>
                </div>
            )
        } else if (this.state.showModal == 10) {
            console.log(2);
            return (
                <div></div>
            )
        }
    }
})

export default MyComponent;
