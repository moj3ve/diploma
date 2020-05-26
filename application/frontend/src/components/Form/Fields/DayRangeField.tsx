import * as React from 'react';

import { FormGroup, FormInputGroup, InputGroup } from '../wrappers';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import { InputAddonPrepend } from './addons';

const DEFAULT = [0, 48];

// [f"{str(i).rjust(2,'0')}:{str(i * 30 % 60).ljust(2, '0')}" for i in range(12)]

export const DayRangeField = ({
	name, title, valueFrom, valueTo,
	onChange = undefined,
	placeholder = undefined,
	disabled = undefined,
	className = undefined,
	required = undefined,
	...props
}) => {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		const defaultValue = Math.abs(valueFrom.getTime() - valueTo.getTime()) / 60000 / 30;
		setValue(defaultValue);
	}, [ valueFrom, valueTo ]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		if (value === newValue
			|| !onChange
			|| !valueFrom
			|| typeof valueFrom === "string"
		) {
			return
		}
		const minutes = valueFrom.getMinutes();
		const newDate = new Date(valueFrom);
		const moreMinutes = newValue * 30;
		newDate.setMinutes(moreMinutes + minutes);
		onChange({ target: { name: name, value: newDate } });
	};

	return (
		<Slider
			marks
			min={0}
			max={47}
			value={value}
			onChange={handleChange}
		/>
	);
}
