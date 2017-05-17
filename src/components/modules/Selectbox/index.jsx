import React from 'react';
import Select from 'react-select';
import  withStyle  from 'react-with-style'
import s from './style.css';

import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default class SelectBox extends React.Component{
	constructor(props) {
		super(props)
		this.saveChanges = this.saveChanges.bind(this)
		this.state = {
			active: ''
		}
	}
	saveChanges(data) {
		console.log("123"+data.value);
		this.props.updateSummary(data.value)
		this.setState({
			active: data.value
		})
	}
	render () {
		return (
			<div>
				<Select
				    name="form-field-name"
				    value={this.state.active ? this.state.active : this.props.selectedItems}
				    options={this.props.data}
						onChange={this.saveChanges}
				/>
			</div>
		);
	}
}

export default withStyle(s)(SelectBox);
