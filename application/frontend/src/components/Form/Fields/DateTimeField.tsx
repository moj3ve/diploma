import * as React from 'react';

import { FormGroup, FormInputGroup, InputGroup } from '../wrappers';

import TextField from '@material-ui/core/TextField';
import { InputAddonPrepend } from './addons';

import DateFnsUtils from '@date-io/date-fns';
import {
	KeyboardDateTimePicker,
	MuiPickersUtilsProvider
} from '@material-ui/pickers';

const DEFAULT = new Date();
DEFAULT.setHours(10);
DEFAULT.setMinutes(0);

export const DateTimeField = ({
	name, title, values, errors,
	addons = undefined,
	onChange = undefined,
	autoFocus = undefined,
	placeholder = undefined,
	disabled = undefined,
	className = undefined,
	required = undefined,
	...props
}) => {
	const handleChange = React.useCallback((date) => {
		onChange({ target: { name: name, value: date } });
	}, [values[name]])
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDateTimePicker
				fullWidth
				// disableToolbar
				autoComplete="off"
				id={name}
				name={name}
				label={title}
				value={values[name] || DEFAULT}
				error={!!errors[name]}
				helperText={errors[name]}
				onChange={handleChange}
				required={required}
				placeholder={placeholder || title}
				autoFocus={autoFocus}
				disabled={disabled}

				size="small"
				inputVariant="outlined"
				format="MM/dd/yyyy hh:mm a"
			/>
		</MuiPickersUtilsProvider>
	);
}
