import React from 'react'
import './style.scss'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="col-sm-12 p-b-20">
          <div className="col-sm-2 t-a-l">
            <div className="connectedCircle pull-left m-r-5"></div>
            <div className="connectedText pull-left">Connected</div>
            <div className="clearfix"></div>
          </div>
          <div className="col-sm-10 t-a-r">
            <div className="footerNavItem pull-right m-l-15">
              <div className="pull-left"></div>
              <img height="20" className="pull-right" src={require("../../../common/images/nobitsyLogo.png")}/>
              <div className="pull-right t-i m-r-10">Powered by</div>
              <div className="clearfix"></div>
            </div>
            <div className="footerNavItem g-c pull-right m-l-15">Trust & Term of Use</div>
            <div className="footerNavItem g-c pull-right m-l-15">Copyright <i className="fa fa-copyright"></i> 2017</div>
            <div className="footerNavItem g-c pull-right m-l-15">Chat now and get live help.</div>
          </div>
          <div className="clearfix"></div>
      </div>
    );
  }
}

//export default Head;
export default Footer;
