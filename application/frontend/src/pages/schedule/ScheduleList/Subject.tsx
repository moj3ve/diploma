import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


export interface IScheduleSubject {
	id: number;
	title: string;
	order: number;
	academic: string;
	type: string;
	pavilion: string;
	classroom: string;
}


export interface ScheduleSubjectProps {
	subject: IScheduleSubject;
}


export const ScheduleSubject = (props: ScheduleSubjectProps) => {
	return (
		<ListItem alignItems="flex-start" button>
			<ListItemAvatar>
				<Avatar>{props.subject.order}</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={props.subject.title}
				secondary={
					<React.Fragment>
						<Typography component="span" variant="body2" color="textPrimary">{props.subject.academic}</Typography>
						{' | '}{props.subject.type} | {props.subject.pavilion} н.к. | {props.subject.classroom}
					</React.Fragment>
				}
			/>
		</ListItem>
	);
}
