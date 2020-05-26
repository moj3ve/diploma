import * as React from 'react';

import { FormGroup, FormInputGroup, InputGroup } from '../wrappers';

import TextField from '@material-ui/core/TextField';
import { InputAddonPrepend } from './addons';

import DateFnsUtils from '@date-io/date-fns';
import {
	DatePicker,
	MuiPickersUtilsProvider
} from '@material-ui/pickers';


export const DateField = ({
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
			<DatePicker
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
				size="small"
				orientation="portrait"

				inputVariant="outlined"
				format="MM/dd/yyyy"
				// value={selectedDate}
				// onChange={handleDateChange}
			/>
		</MuiPickersUtilsProvider>
	);
}
