import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const Chat = (props) => {
	const chatId = props.match.params.chatId;
	console.log(chatId);
	return (
		<React.Fragment>
			<Typography variant="h4">{chatId}</Typography>
			<Grid container>
				<Grid item container xs={12} sm={4} component={Paper} square>
					<Paper square>
						Hello
					</Paper>
				</Grid>
				<Grid item container xs={12} sm={8} component={Paper} square>
					Messages
				</Grid>
			</Grid>
		</React.Fragment>
	);
};


export default Chat;
