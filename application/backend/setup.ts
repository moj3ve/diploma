import { sync } from './database/';

import {
	createStudent,
	createAcademic,
} from './database/';


(async () => {
	await sync();

	// Create students
	await createStudent("Slavik", "Nychkalo", "slav@gmail.com", "0970067238");

	// Create academics
	await createAcademic("Andrew", "Panandas", "andrew@gmail.com", "0995444743");
})()
	.then(res => console.log(res))
	.catch(err => console.log(err));
