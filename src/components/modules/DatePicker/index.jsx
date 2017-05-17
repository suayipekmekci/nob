import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require('react-datepicker/dist/react-datepicker.css');
import './style.css'

var DateModule = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },
  renderUserMessage(){
    if (this.props.inlineStyle) {
      return (
        <DatePicker
          inline
          selected={this.state.startDate}
          //todayButton={"Today"}
          onChange={this.handleChange}
          peekNextMonth
          //showMonthDropdown
          //showYearDropdown
        dropdownMode="select" />
      );
    } else {
      return (
        <DatePicker
          selected={this.state.startDate}
          //todayButton={"Today"}
          onChange={this.handleChange}
          peekNextMonth
          //showMonthDropdown
          //showYearDropdown
        dropdownMode="select" />
      );
    }
  },
  render: function() {
    return (
      <div>
        {this.renderUserMessage()}
      </div>
    )
  }
});

export default DateModule;
