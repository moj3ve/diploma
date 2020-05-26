import * as React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';


export class InputAddonPrepend extends React.Component<any, any> {
	shouldComponentUpdate(newProps) {
		return false;
	}

	render() {
		return (
			<InputAdornment position="start">
				{this.props.children}
			</InputAdornment>
		);
	}
}

export class InputAddonAppend extends React.Component<any, any> {
	shouldComponentUpdate(newProps) {
		return false;
	}

	render() {
		return (
			<InputAdornment position="end">
				{this.props.children}
			</InputAdornment>
		);
	}
}
