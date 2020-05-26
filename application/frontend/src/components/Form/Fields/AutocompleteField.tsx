import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const EMPTY_ARR = [];

const inputProps = {
	shrink: true,
};

export const AutocompleteField = (props) => {
	const renderInput = (params) => (
		<TextField
			{...params}
			autoComplete="off-off"
			label={props.title}
			name={props.name}
			variant="outlined"
			placeholder={props.placeholder || props.title}
			error={!!props.errors[props.name]}
			helperText={props.errors[props.name]}
			InputLabelProps={inputProps}
			required={props.required}
		/>
	);

	const handleInputChange = React.useCallback((e, newInputValue, reason) => {
		if (e) {
			const ev = { target: { name: props.name, value: newInputValue } };
			if (e.nativeEvent instanceof InputEvent) {
				props.onChange(ev);
				props.onInputChange && props.onInputChange(ev);
			} {
				props.onChange(ev)
			} 
		}
	}, [])

	return (
		<Autocomplete
			loading={props.isFetching}
			loadingText="Loading..."

			inputValue={props.values[props.name] || ''}
			onInputChange={handleInputChange}
			freeSolo={props.anyValue}

			autoComplete
			autoHighlight
			options={props.data || EMPTY_ARR}
			size="small"
			getOptionLabel={props.getOptionLabel}
			disabled={props.disabled}
			renderInput={renderInput}
		/>
	)
}
