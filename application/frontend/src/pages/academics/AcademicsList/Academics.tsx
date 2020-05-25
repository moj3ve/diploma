import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';


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


export interface IAcademic {
	id: number;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
}


export interface AcademicProps {
	academic: IAcademic;
}


export const Academic = (props: AcademicProps) => {
	return (
		<ListItem alignItems="flex-start" button>
			<ListItemAvatar>
				<Avatar>SN</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={`${props.academic.firstName} ${props.academic.lastName}`}
				secondary={
					<React.Fragment>
						<Typography component="span" variant="body2" color="textPrimary">{props.academic.email}</Typography>
						<br />
						<span>{props.academic.phone}</span>
					</React.Fragment>
				}
			/>
			<Hidden xsDown implementation="css">
				<ListItemSecondaryAction>
					<IconButton href={`tel:${props.academic.phone}`} edge="end" aria-label="call">
						<CallIcon />
					</IconButton>
					<IconButton edge="end" aria-label="chat">
						<ChatIcon />
					</IconButton>
					<IconButton href={`mailto:${props.academic.email}`} edge="end" aria-label="email">
						<EmailIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</Hidden>
		</ListItem>
	);
}


export interface IAcademicsProps {
	academics: IAcademic[];
}

export const Academics = (props: IAcademicsProps) => {
	const classes = useStyles();

	return (
		<List
			className={classes.root}
			subheader={
				<ListSubheader className={classes.subheader} component="div">
					Викладачі
				</ListSubheader>
			}
		>
			{props.academics.map(academic => (
				<Academic
					key={academic.id}
					academic={academic}
				/>
			))}
		</List>
	);
};
