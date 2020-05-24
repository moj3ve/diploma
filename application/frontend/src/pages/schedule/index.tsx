import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { ScheduleList } from './ScheduleList';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			marginBottom: '0.4em',

			[theme.breakpoints.down('xs')]: {
				fontSize: '3.4em',
			}
		},
	}),
);


const Schedule = (props) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h2" className={classes.title}>
				Розклад Занять
			</Typography>
			<ScheduleList />
		</React.Fragment>
	);
};


export default Schedule;
