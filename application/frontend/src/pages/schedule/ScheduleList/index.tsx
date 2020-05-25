import * as React from 'react';

import Grid from '@material-ui/core/Grid';

import { createDay } from './helpers';
import { ScheduleDay, IScheduleDay } from './Day';


const schedule: IScheduleDay[] = [
	createDay("01/12/2019"),
	createDay("08/24/2019"),
	createDay("12/24/2019"),
	createDay("08/20/2020"),
];

export const ScheduleList = (props) => (
	<Grid container spacing={2} alignItems="center" direction="column">
		{schedule.map(day => (
			<Grid key={day.id} item xs={12} md={10} lg={6} xl={5}>
				<ScheduleDay schedule={day} />
			</Grid>
		))}
	</Grid>
);