import * as React from 'react';

import { FormGroup, InputGroup } from '../wrappers';


import TextField from '@material-ui/core/TextField';

export const TextareaField = ({
	name, title, values, errors,
	onChange = undefined,
	autoFocus = undefined,
	placeholder = undefined,
	disabled = undefined,
	className = undefined,
	required = undefined,
	...props
}) => (
	<TextField
		multiline
		fullWidth
		rows={2}
		variant="outlined"
		autoComplete="off-off"
		id={name}
		name={name}
		label={title}
		value={values[name] || ''}
		error={!!errors[name]}
		helperText={errors[name]}
		onChange={onChange}
		required={required}
		placeholder={placeholder}
		autoFocus={autoFocus}
		disabled={disabled}
		// {...props}
	/>
);
