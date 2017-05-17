import React from 'react';
import NProgress from 'nProgress';
NProgress.configure({showSpinner: false});
import './style.scss'
const MyComponent = React.createClass({
    getInitialState() {
        return {showModal: 0};
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
      return (
          <div id="notPage">
              404 Not Found!
          </div>
      )
    }
})

export default MyComponent;
