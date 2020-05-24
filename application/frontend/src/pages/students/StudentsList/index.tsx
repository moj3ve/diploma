import * as React from 'react';

import Grid from '@material-ui/core/Grid';

import { createStudent } from './helpers';
import { Students, IStudent } from './Students';


const students: IStudent[] = [
	createStudent(),
	createStudent(),
	createStudent(),
	createStudent(),
];

export const StudentsList = (props) => (
	<Grid container spacing={2} justify="center">
		<Grid item xs={12} md={10} lg={7} xl={7}>
		<Students
			students={students}
		/>
		</Grid>
	</Grid>
);