import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import { StudentsList } from './StudentsList';

const Students = (props) => {
	return (
			// <Typography variant="h2">
			// 	Студенти
			// </Typography>
		<React.Fragment>
			<StudentsList />
		</React.Fragment>
	);
};


export default Students;
