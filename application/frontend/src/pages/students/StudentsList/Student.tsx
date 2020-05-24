import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';


export interface IStudent {
	id: number;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
}


export interface StudentProps {
	student: IStudent;
}


export const Student = (props: StudentProps) => {
	return (
		<ListItem alignItems="flex-start" button>
			<ListItemAvatar>
				<Avatar>SN</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={`${props.student.firstName} ${props.student.lastName}`}
				secondary={
					<React.Fragment>
						<Typography component="span" variant="body2" color="textPrimary">{props.student.email}</Typography>
						<br />
						<span>{props.student.phone}</span>
					</React.Fragment>
				}
			/>
			<ListItemSecondaryAction>
				<IconButton href={`tel:${props.student.phone}`} edge="end" aria-label="call">
					<CallIcon />
				</IconButton>
				<IconButton edge="end" aria-label="chat">
					<ChatIcon />
				</IconButton>
				<IconButton href={`mailto:${props.student.email}`} edge="end" aria-label="email">
					<EmailIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
