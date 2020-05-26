import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		padding: 16,
		
		'&:last-child': {
			padding: 16,
		},
	},
});

export const BorderHighlight = (props) => {
	const classes = useStyles();

	return (
		<Paper elevation={0} variant="outlined">
			<Box m={1.3}>
				{props.children}
			</Box>
		</Paper>
	);
};
