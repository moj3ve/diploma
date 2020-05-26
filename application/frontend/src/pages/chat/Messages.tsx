import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		}
	}),
);

export const MessageItem = () => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>SA</Avatar>
			</ListItemAvatar>
			<ListItemText primary="Slavik Nychkalo" secondary="Hello my name is slavik and i am a developer" />
			<ListItemSecondaryAction>
				<Typography variant="overline" color="textSecondary">11:20</Typography>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export const MessagesList = () => {
	const classes = useStyles();

	return (
		<List classes={classes}>
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
			<MessageItem />
		</List>
	);
}