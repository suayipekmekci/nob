import React from 'react';
import './style.css';

class Loading extends React.Component {
    render() {
        return (
          <div className="loadingContent">
            <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
          </div>
        );
    }
}

export default Loading;
