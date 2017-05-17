import React from 'react';
import Datamap from '../mainDataMaps';
import Example from '../example';

class BasicExample extends React.Component {
	render() {
		return (
			<Example label="Basic">
				<Datamap responsive/>
			</Example>
		);
	}
}

export default BasicExample;
