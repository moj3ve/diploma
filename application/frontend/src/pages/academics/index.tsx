import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import { AcademicsList } from './AcademicsList';

const Students = (props) => {
	return (
			// <Typography variant="h2">
			// 	Викладачі
			// </Typography>
		<React.Fragment>
			<AcademicsList />
		</React.Fragment>
	);
};


export default Students;
