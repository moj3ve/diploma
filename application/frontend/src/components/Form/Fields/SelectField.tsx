import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { InputAddonPrepend } from './addons';


export const SelectField = ({
	name, title, values, errors,
	addons=undefined,
	onChange=undefined,
	autoFocus=undefined,
	placeholder=undefined,
	disabled=undefined,
	className=undefined,
	required=undefined,
	...props
}) => (
	<TextField
		select
		fullWidth
		variant="outlined"
		size="small"
		label={title}
		id={name}
		name={name}
		value={values[name] || ''}
		error={!!errors[name]}
		helperText={errors[name]}
		onChange={onChange}
		autoFocus={autoFocus}
		disabled={disabled}
		required={required}
		placeholder={placeholder}
		InputProps={props.InputProps}
		// InputProps={addons ? {
		// 	startAdornment: <InputAddonPrepend>{addons}</InputAddonPrepend>,
		// } : undefined}
	>
		{React.Children.count(props.children) > 0 ? props.children : <MenuItem disabled>Empty</MenuItem>}
	</TextField>
);
