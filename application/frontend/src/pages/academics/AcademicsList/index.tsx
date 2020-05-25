import * as React from 'react';

import Grid from '@material-ui/core/Grid';

import { createAcademic } from './helpers';
import { Academics, IAcademic } from './Academics';


const academics: IAcademic[] = [
	createAcademic(),
	createAcademic(),
	createAcademic(),
	createAcademic(),
];

export const AcademicsList = (props) => (
	<Grid container spacing={2} justify="center">
		<Grid item xs={12} md={10} lg={7} xl={7}>
		<Academics
			academics={academics}
		/>
		</Grid>
	</Grid>
);