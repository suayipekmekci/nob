import React, { PropTypes, Component } from 'react';
import SettingNav from '../../../layouts/SettingNav';
import Panel from '../../../modules/Panel';
import Tables from '../../../modules/Tables';
import PostModule from '../../../modules/Post';
import NProgress from 'nProgress';

let addedParams = ["name","surname","email"]

NProgress.configure({ showSpinner: false });
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:""
    };
  }
  /*componentWillUpdate(nextProps, nextState){
    console.log(1);
    console.log(nextProps);
    //dataSet = dataPostModule.postType("http://52.48.0.60/api/account/users",postParams}
  }
  shouldComponentUpdate(newProps, newState){
    console.log(2);
    console.log(newProps);
    return true;
  }*/
  componentWillMount() {
    NProgress.start();
    /*return post data*/
    var postParams = {access_token: PostModule.accessParams()};
    PostModule.postType("http://52.48.0.60/api/account/users",postParams).then((successMessage) => {
      this.setState({data: successMessage});
    });
  }
  componentDidMount() {
    NProgress.done();
  }
  render() {
      if(this.state.data.length == 0) {
        return (
          <div></div>
       );
      }else{
        return (
        <div>
          <SettingNav active="Users"/>
          <Panel icon="fa fa-table" title="All Users" buttonHide={false} buttonLink="/AddUser" buttonName="Add a User"  gridsize="col-md-12">
            <Tables dataEexport={false} dataPagination={true} dataSearch={true} add={addedParams} fulldata={this.state.data}/>
          </Panel>
        </div>
      );
    }
  }
}

export default MyComponent;
