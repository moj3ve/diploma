import * as React from 'react';

import { FormGroup, FormInputGroup, InputGroup } from '../wrappers';

import TextField from '@material-ui/core/TextField';
import { InputAddonPrepend } from './addons';

import DateFnsUtils from '@date-io/date-fns';
import {
	TimePicker,
	KeyboardTimePicker,
	MuiPickersUtilsProvider
} from '@material-ui/pickers';


export const TimeField = ({
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
			<KeyboardTimePicker
				fullWidth
				// disableToolbar
				autoOk
				autoComplete="off"
				id={name}
				name={name}
				label={title}
				value={values[name] || undefined}
				error={!!errors[name]}
				helperText={errors[name]}
				onChange={handleChange}
				required={required}
				placeholder={placeholder || title}
				autoFocus={autoFocus}
				disabled={disabled}
				variant="inline"

				minutesStep={5}
				orientation="portrait"
				// views={["hours", "minutes"]}

				size="small"
				inputVariant="outlined"
				// format="dd/MM/yyyy"
				// value={selectedDate}
				// onChange={handleDateChange}
			/>
		</MuiPickersUtilsProvider>
		// <TextField
		// 	fullWidth
		// 	variant="outlined"
		// 	autoComplete="off"
		// 	id={name}
		// 	name={name}
		// 	label={title}
		// 	type={type}
		// 	value={values[name] || ''}
		// 	error={!!errors[name]}
		// 	helperText={errors[name]}
		// 	onChange={onChange}
		// 	required={required}
		// 	placeholder={placeholder || title}
		// 	autoFocus={autoFocus}
		// 	disabled={disabled}
		// 	InputProps={addons ? {
		// 		startAdornment: (
		// 			<InputAddonPrepend>{addons}</InputAddonPrepend>
		// 		),
		// 	} : undefined}
		// />
	);
}
