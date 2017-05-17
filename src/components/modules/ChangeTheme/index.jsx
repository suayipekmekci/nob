import React from 'react'
import './style.scss'

var Switch = React.createClass({
	getInitialState: function() {
		return ({
			time: 'night'
		});
	},
  componentWillMount: function(){
      document.body.classList.add('nightStyle');
  },
	handleClick: function() {
    document.getElementById("themeDayButton").classList.remove('themeBtnColor1');
    document.getElementById("themeDayButton").classList.remove('themeBtnColor2');
    document.getElementById("themeNightButton").classList.remove('themeBtnColor1');
    document.getElementById("themeNightButton").classList.remove('themeBtnColor2');
    document.body.classList.remove('dayStyle');
    document.body.classList.remove('nightStyle');
		if(this.state.time === 'night') {
      document.body.classList.add('dayStyle');
      document.getElementById("themeDayButton").classList.add('themeBtnColor0');
      document.getElementById("themeNightButton").classList.add('themeBtnColor2');
			this.setState({time: 'day'});
		} else {
      document.body.classList.add('nightStyle');
      document.getElementById("themeDayButton").classList.add('themeBtnColor2');
      document.getElementById("themeNightButton").classList.add('themeBtnColor1');
			this.setState({time: 'night'});
		}
	},
	render: function() {
		return (
      <div id="themeChange" onClick={this.handleClick}>
        <div data-theme="1" id="themeDayButton" className="themeColor theme1 themeBtnColor1"></div>
        <div data-theme="2" id="themeNightButton" className="themeColor theme2 themeBtnColor2"></div>
      </div>
		)
	}
});

export default Switch;
