import React from 'react'

import CircularProgressbar from 'react-circular-progressbar';
import './style.css'

class Progress extends React.Component {
  render() {
    return (
      <div className="myProgressBar">
          <CircularProgressbar
            percentage={this.props.percentage}
            strokeWidth={this.props.strokewidth}
            initialAnimation={true}
            />
      </div>
    );
  }
}

export default Progress;
