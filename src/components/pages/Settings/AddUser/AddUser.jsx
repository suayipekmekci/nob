import React, { PropTypes, Component } from 'react';
import {
    Button,
    Col,
    Row,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import SettingNav from '../../../layouts/SettingNav';
import Panel from '../../../modules/Panel';
import PostModule from '../../../modules/Post';
import './style.scss'

import NProgress from 'nProgress';
NProgress.configure({ showSpinner: false });

class MyComponent extends React.Component {
  componentWillMount() {
    NProgress.start();
  }
  componentDidMount() {
    NProgress.done();
  }
  addUser(event){
    var postParams = PostModule.postParams(event);
    PostModule.postType("http://52.48.0.60/api/user/create",postParams);
  }
  render() {
    return (
      <div>
        <SettingNav active="Users"/>
        <Panel icon="fa fa-user" title="Add a User" buttonHide={true} buttonLink="" buttonName=""  gridsize="col-md-12">
        <form onSubmit={this.addUser}>
            <Col className="m-b-15" sm={6}>
              <Row className="m-b-15">
                  <Col sm={12}>
                    <div className="formTitleMiddle">About User</div>
                  </Col>
              </Row>
                <Row className="m-b-15">
                    <Col componentClass={ControlLabel} sm={2}>
                        First Name:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" name="name" placeholder=""/>
                    </Col>
                </Row>
                <Row className="m-b-15">
                    <Col componentClass={ControlLabel} sm={2}>
                        Last Name:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" name="surname" placeholder=""/>
                    </Col>
                </Row>
                <Row className="m-b-15">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" name="email" placeholder=""/>
                    </Col>
                </Row>
                <Row className="m-b-15 d-n">
                    <Col componentClass={ControlLabel} sm={2}>
                        hiddenparams:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" name="email_callback_url" defaultValue="userVerification?id="/>
                    </Col>
                </Row>
            </Col>
            <div className="clearfix"></div>
            <Button bsStyle="primary" className="pull-right" type="submit">Save</Button>
            <Button bsStyle="default" className="pull-right m-r-10">Cancel</Button>
        </form>
      </Panel>
      </div>
    );
  }
}

export default MyComponent;
