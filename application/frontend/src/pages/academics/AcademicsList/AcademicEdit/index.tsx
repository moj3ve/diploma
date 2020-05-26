import * as React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { ModalEditFormSm } from '../../../../components/Modal/';
import {
	InputField, BooleanField, TextareaField,
	Form, withForm, withFormModal,
} from '../../../../components/Form/';
import { RaitAdornment, WeightAdornment, LengthAdornment } from './addons';



export const AcademicEditForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit} disabled={props.isSubmitting} errorMessage={props.errorMessage}>
			<Grid container spacing={2}>

				<Grid item xs={6}>
					<InputField
						values={props.values}
						errors={props.errors}
						onChange={props.handleFieldChange}
						name="firstName"
						title="Ім'я"
					/>
				</Grid>
				<Grid item xs={6}>
					<InputField
						values={props.values}
						errors={props.errors}
						onChange={props.handleFieldChange}
						name="lastName"
						title="Прізвище"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						values={props.values}
						errors={props.errors}
						onChange={props.handleFieldChange}
						type="email"
						name="email"
						title="Email"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						values={props.values}
						errors={props.errors}
						onChange={props.handleFieldChange}
						type="phone"
						name="phone"
						title="Номер телефону"
					/>
				</Grid>

			</Grid>
		</Form>
	);
}


interface AcademicEditModalProps {
	VendorInfoBlock?: JSX.ElementClass;
	StopBlock?: JSX.ElementClass;
	academic: any;
	updateAcademic: (academic: any) => any;
	handleClose: () => any;
}


const AcademicEditFormNew = (props) => (
	<AcademicEditForm
		{...props}
	/>
);


const AcademicEditModalForm = withFormModal<AcademicEditModalProps>(
	ModalEditFormSm,
	props => `${props.academic.firstName} ${props.academic.lastName}`,
	{	
		defaultValues(props) {
			return {
				...props.academic,
			};
		},

		beforeSubmit(values, props) {
			return {
				...values,
			};
		},

		onAsyncSubmit(values) {
			return new Promise(res => res({success: true}));
		},

		onSuccess(props, data) {
			props.updateAcademic(data.item);
			props.handleClose();
		},
	}
)(AcademicEditFormNew);

export const AcademicEditModal = connect(
	undefined,
	{ updateAcademic: console.log }
)(AcademicEditModalForm);
