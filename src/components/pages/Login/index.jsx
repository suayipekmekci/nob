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
import ChangeTheme from '../../modules/ChangeTheme';
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
            //location.hash = "/";
            window.location.pathname = "/"
            setTimeout(function(){ location.reload(); }, 100);
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
                                  <FormControl type="email" name="username" placeholder="text@nobitsy.com"/>
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

const MyComponent = React.createClass({
    componentWillMount() {
        NProgress.start();
      },
    componentDidMount() {
        NProgress.done();
    },
    render() {
      return (
          <div>
              <ModalLogin/>
          </div>
      )
    }
})

export default MyComponent;
