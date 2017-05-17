import React from 'react'
import Slider from 'react-slick'
import {
    OverlayTrigger,
    Popover,
    Button,
    Modal,
    FormGroup,
    Col,
    Row,
    FormControl,
    HelpBlock,
    ControlLabel
} from 'react-bootstrap';
import PostModule from '../../modules/Post';
import './style.scss'

/*Add dasdboard step-1*/
const ModalCreateDashboard = React.createClass({
    getInitialState() {
        return {
          showCreateDashboardModal1: this.props.modalShowOrHide,
          selected: "-1",
          data: "",
          moduleid:""
        };
    },
    close() {
        this.setState({showCreateDashboardModal1: false});
    },
    open() {
      var postParams = {access_token: PostModule.accessParams()};
      PostModule.postType("http://52.48.0.60/api/user/modules",postParams).then((successMessage) => {
        this.setState({data: successMessage});
      });
      this.setState({showCreateDashboardModal1: true});
    },
    isActive(value){
      return ((value===this.state.selected) ?'active':'');
    },
    activeModule(index, code) {

      if(this.state.selected == index){
        this.setState({
          selected  : "-1",
          moduleid : code
        })
      }else{
        this.setState({
          selected  : index,
          moduleid : code
        })
      }
    },
    nextStep2() {
      this.close();
      this.child.open();
    },
    render() {
      if(!this.state.data){
        return (
          <div className="d-n">Loading...</div>
        )
      }else{
        return (
            <div>
                <Modal className="modalBigMaxWidth" show={this.state.showCreateDashboardModal1} onHide={this.close}>
                    <Modal.Header className="m-h-55">
                        <div className="modalCloseButton" onClick={this.close}>
                          <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                        </div>
                        <Modal.Title className="modalNTitle">
                            <Col sm={11} className="m-b-25">Create Dashboard</Col>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col sm={12}>
                            <ul id="module_logos">
                              {this.state.data.map((type, index) => {
                                  return (
                                    <li key={index} data-id={type.id} onClick={this.activeModule.bind(this, index, type.id)} className={this.isActive(index)}>
                                      <img src={require("../../../common/images/module_logos/"+type.tag+".png")}/>
                                      <div className="moduleName">{type.name}</div>
                                      <i className="fa fa-check"></i>
                                    </li>
                                  );
                              })}
                            </ul>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="link"  onClick={this.nextStep2}>Next</Button>
                    </Modal.Footer>
                </Modal>
                <ModalCreateDashboardStep2 dataid={this.state.moduleid} updateDashboardData={this.props.updateDashboardData} backtoStep={this.open} ref={instance => { this.child = instance; }}/>
            </div>
        );
      }
    }
})

/*Add dasdboard step-2*/
const ModalCreateDashboardStep2 = React.createClass({
    getInitialState() {
        return {
          showCreateDashboardModal2: this.props.modalShowOrHide,
          data: "",
          selectMetric: ""
        };
    },
    close() {
        this.setState({showCreateDashboardModal2: false});
    },
    open() {
      var postParams = {
        access_token: PostModule.accessParams(),
        module_id: this.props.dataid
      };
      PostModule.postType("http://52.48.0.60/api/module/source",postParams).then((successMessage) => {
        this.setState({data: successMessage});
      });
      this.setState({showCreateDashboardModal2: true});
    },
    backToStep1() {
      this.close();
      this.props.backtoStep()
    },
    metricChange(e){
      this.setState({selectMetric: e.target.value});
    },
    addItems() {
      var postParams = {
        access_token: PostModule.accessParams(),
        crawler_id: this.state.selectMetric,
        module_id: this.props.dataid
      };
      PostModule.postType("http://52.48.0.60/api/dashboard/add",postParams).then((successMessage) => {
        this.props.updateDashboardData(successMessage);
        this.close();
      });
    },
    render() {
      if(!this.state.data){
        return (
          <div className="d-n">Loading...</div>
        )
      }else{
        return (
            <div>
                <Modal className="modalBigMaxWidth" show={this.state.showCreateDashboardModal2} onHide={this.close}>
                    <Modal.Header className="m-h-55">
                        <div className="modalCloseButton" onClick={this.close}>
                          <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                        </div>
                        <Modal.Title className="modalNTitle">
                            <Col sm={11} className="m-b-25">Audience Metrics</Col>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-t-0">
                        <Col sm={12} className="m-b-20 p-0">
                            <div className="col-sm-5 modalBodyTitle p-l-0">Content to services</div>
                            <div className="col-sm-7 t-a-r modalBodySmallTitle p-r-0">Your data will only be used in Nobitsy</div>
                        </Col>
                        <Col sm={12} className="p-0">
                            <div className="pull-left col-sm-6 p-l-0">
                                <img className="pull-left" height="60" src={require("../../../common/images/module_logos/GoogleAnalytics.png")}/>
                                <div className="pull-left m-t-20 m-l-10 accountTitle">Google Analytics</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="pull-left col-sm-6 p-r-0">
                              <div className="m-t-20">
                                <FormGroup controlId="formControlsSelect">
                                  <FormControl onChange={this.metricChange} componentClass="select" placeholder="select">
                                    <option value="select">Select</option>
                                    {this.state.data.map((type, index) => {
                                        return (<option key={index} value={type.id}>{type.site_link}</option>);
                                    })}
                                  </FormControl>
                                </FormGroup>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                        </Col>
                        <div className="clearfix"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="link" className="pull-right" onClick={this.addItems}>Create Dashboard</Button>
                        <Button className="pull-right btn-back m-r-15" onClick={this.backToStep1}>Back</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
      }
    }
})

/*re name*/
const ModalRename = React.createClass({
    getInitialState() {
        return {
          showRename: false
        };
    },
    close() {
        this.setState({showRename: false});
    },
    open() {
      this.setState({showRename: true});
    },
    rename(event) {
      var postParams = PostModule.postParams(event);
      PostModule.postType("http://52.48.0.60/api/dashboard/rename",postParams).then((successMessage) => {
          this.props.dataDashChange(successMessage)
          this.close();
      });
    },
    render() {
        return (
          <Modal className="modalBigMaxWidth" show={this.state.showRename} onHide={this.close}>
            <form onSubmit={this.rename}>
              <Modal.Header className="m-h-55">
                  <div className="modalCloseButton" onClick={this.close}>
                    <i className="fa fa-window-close-o closeModalButton" aria-hidden="true"></i>
                  </div>
                  <Modal.Title className="modalNTitle">
                      <Col sm={11} className="m-b-25">Change Name</Col>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-t-0">
                  <Col sm={12} className="p-0">
                      <FormControl type="text" name="name" defaultValue={this.props.renameValue}/>
                      <input className="d-n" name="id" defaultValue={this.props.renameId}/>
                      <div className="clearfix"></div>
                  </Col>
                  <div className="clearfix"></div>
              </Modal.Body>
              <Modal.Footer>
                  <Button bsStyle="link" className="pull-right" type="submit">Ok</Button>
                  <Button className="pull-right btn-back m-r-15" onClick={this.close}>Cancel</Button>
              </Modal.Footer>
              </form>
          </Modal>
        );
    }
})

const SimpleSlider = React.createClass({
    getInitialState(){
      return {
        selected:0,
        renameVal:"",
        renameId:""
      }
    },
    shouldComponentUpdate(newProps, newState){
      return true; // refresh
    },
    activeDashboardChange(index){
      this.setState({selected  : index})
    },
    isActive(value){
      return 'dashboardItem p-rel '+((value===this.state.selected) ?'active':'');
    },
    dashboardNavShow(value){
      return 'fa fa-ellipsis-v '+((value===this.state.selected) ?'d-b':'d-n');
    },
    rename(index,code){
      this.setState({renameVal  : this.props.dataList[index].name});
      this.setState({renameId  : this.props.dataList[index].id});
      this.refs.child.open();
    },
    delete(index,code){
      var postParams = {
        access_token: PostModule.accessParams(),
        id: code
      };
      PostModule.postType("http://52.48.0.60/api/dashboard/delete",postParams).then((successMessage) => {
        document.getElementById("popover-trigger-click-root-close").style.display = "none";
        this.props.dataList.splice(index, 1);
        this.forceUpdate()
      });
    },
    handleChange(code){
      this.props.changeDashboarList(code)
    },
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };
        if(this.props.dataList){
        return (
            <Slider {...settings}>
              {this.props.dataList.map((type, index) => {
                  return (
                    <div key={index}>
                    <div className={this.isActive(index)} key={index} onClick={this.activeDashboardChange.bind(this, index)}>
                      <div className="dashboardItemName">{type.name}</div>
                        <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={<Popover id="popover-trigger-click-root-close">
                            <div onClick={this.rename.bind(this, index, type.id)} className="popoverItem">Rename...</div>
                            <div onClick={this.delete.bind(this, index, type.id)} className="popoverItem">Remove Dahboard</div>
                        </Popover>}>
                            <i className={this.dashboardNavShow(index)}></i>
                        </OverlayTrigger>
                    </div>
                    </div>
                  );
              })}
              <ModalRename ref="child" dataDashChange={this.handleChange} renameId={this.state.renameId} renameValue={this.state.renameVal}/>
            </Slider>
        );
      }else{
        return (
          <div></div>
        )
      }
    }
});

var tokenTest = "";
var intervalId = "";
class Head extends React.Component {
    constructor(props) {
  		super(props)
  		this.state = {
  			showCreateDashboardModal: false,
        data:""
  		}
      this.onUpdateDashboardList = this.onUpdateDashboardList.bind(this)
  	}
    componentWillMount() {
      intervalId = setInterval(this.timer.bind(this), 500);
    }
    userInfo(){
      var postParams = {
        access_token: PostModule.accessParams()
      };
      PostModule.postType("http://52.48.0.60/api/user",postParams).then((successMessage) => {
      document.getElementById("userHeaderName").innerHTML = successMessage.name+" "+successMessage.surname;
      });
    }
    dashboardList(){
        var postParams = {
          access_token: PostModule.accessParams()
        };
        PostModule.postType("http://52.48.0.60/api/user/dashboards",postParams).then((successMessage) => {
          if(successMessage.length != undefined){
            this.setState({data  : successMessage})
          }
        });
    }
    timer(code){
      tokenTest = PostModule.accessTokenParams();
      if(tokenTest.length != 0 && tokenTest != "test" && tokenTest != undefined){
        clearInterval(intervalId);
        this.dashboardList();
        this.userInfo();
      }
    }
    onUpdateDashboardList(code){
      this.setState({data  : code})
    }
    render() {
      return (
          <div id="headerBottom" className="col-sm-12">
              <div id="DashboardContainer"><SimpleSlider changeDashboarList={this.onUpdateDashboardList} dataList={this.state.data}/></div>
              <div className="topMenuToggleBtn pull-right" onClick={() => { this.child.open(); }}>
                  <i className="fa fa-plus-circle"></i>
              </div>
              <div className="clearfix"></div>
                <ModalCreateDashboard updateDashboardData={this.onUpdateDashboardList} ref={instance => { this.child = instance; }}/>
          </div>
      );
    }
}

export default Head;
