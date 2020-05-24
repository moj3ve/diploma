import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Student, IStudent } from './Student';
import { format } from 'date-fns';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
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


export interface IStudentsProps {
	students: IStudent[];
}

export const Students = (props: IStudentsProps) => {
	const classes = useStyles();

	return (
		<List
			className={classes.root}
			subheader={
				<ListSubheader className={classes.subheader} component="div">
					Студенти
				</ListSubheader>
			}
		>
			{props.students.map(student => (
				<Student
					key={student.id}
					student={student}
				/>
			))}
		</List>
	);
};
