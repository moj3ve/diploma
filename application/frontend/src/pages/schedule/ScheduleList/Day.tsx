import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

import { ScheduleSubject, IScheduleSubject } from './Subject';
import { format } from 'date-fns';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			// maxWidth: '36ch',
			// marginBottom: '1em',
			backgroundColor: theme.palette.background.paper,
		},
		inline: {
			display: 'inline',
		},
		subheader: {
			fontSize: '24px',
		}
	}),
);


export interface IScheduleDay {
	id: number;
	date: Date;
	subjects: IScheduleSubject[];
}


export interface IScheduleDayProps {
	schedule: IScheduleDay;
}


export const ScheduleDay = (props: IScheduleDayProps) => {
	const classes = useStyles();

	return (
		<List
			className={classes.root}
			subheader={
				<ListSubheader className={classes.subheader} component="div">
					{format(props.schedule.date, "dd.MM.yyyy")}
				</ListSubheader>
			}
		>
			{props.schedule.subjects.map(subject => (
				<ScheduleSubject
					key={subject.id}
					subject={subject}
				/>
			))}
		</List>
	);
};
