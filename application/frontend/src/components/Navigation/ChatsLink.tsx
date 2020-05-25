import * as React from 'react';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ChatIcon from '@material-ui/icons/Chat';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import { NavLink } from "react-router-dom";

const useStylesChatLink = makeStyles((theme: Theme) =>
	createStyles({
		nested: {
			paddingLeft: theme.spacing(4),
		},
		nested2: {
			paddingLeft: theme.spacing(5),
		},
	}),
);

const ChatLink = (props: { onClick: any; chatId: string; title: string; className: string; }) => (
	<ListItem
		button
		onClick={props.onClick}
		className={props.className}
		component={NavLink}
		activeClassName="Mui-selected"
		to={`/chat/${props.chatId}`}
		exact
	>
		<ListItemText primary={props.title} />
	</ListItem>
);

export const ChatsLink = (props) => {
	const classes = useStylesChatLink();
	const [ open, setOpen ] = React.useState(false);

	return (
		<React.Fragment>
			<ListItem button onClick={() => setOpen(!open)}>
				<ListItemIcon><ChatIcon /></ListItemIcon>
				<ListItemText primary="Чати" />
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ChatLink title="Загальний" chatId="1" onClick={props.onClick} className={classes.nested} />
				</List>
				<List component="div" disablePadding subheader={<ListSubheader className={classes.nested}>Предмети</ListSubheader>}>
					<ChatLink title="Основи компютерних мереж" chatId="123" onClick={props.onClick} className={classes.nested2} />
					<ChatLink title="Охорона Праці" chatId="1234" onClick={props.onClick} className={classes.nested2} />
				</List>
				<List component="div" disablePadding subheader={<ListSubheader className={classes.nested}>Приватні</ListSubheader>}>
					<ChatLink title="Ярослав Ничкало" chatId="y1" onClick={props.onClick} className={classes.nested2} />
					<ChatLink title="Ярослав Ничкало" chatId="y2" onClick={props.onClick} className={classes.nested2} />
					<ChatLink title="Ярослав Ничкало" chatId="y3" onClick={props.onClick} className={classes.nested2} />
					<ChatLink title="Ярослав Ничкало" chatId="y4" onClick={props.onClick} className={classes.nested2} />
				</List>
			</Collapse>
		</React.Fragment>
	)
};
