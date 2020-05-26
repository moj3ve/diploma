import * as React from 'react';

import { FormInputGroup, InputGroup } from '../wrappers';

import TextField from '@material-ui/core/TextField';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';



export const BooleanField = ({
	name, title, values, errors,
	onChange = undefined,
	disabled = undefined,
}) => {

	const handleChange = React.useCallback((e, newValue) => {
		onChange({ target: { name: name, value: newValue } });
	}, [values[name]]);

	return (
		<FormControl
			// fullWidth
		>
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							size="small"
							checked={!!values[name]}
							onChange={handleChange}
							name={name}
						/>
					}
					label={title}
				/>
			</FormGroup>
			{errors[name] ? <FormHelperText error={!!errors[name]}>{errors[name]}</FormHelperText> : null}
		</FormControl>
	);
}
