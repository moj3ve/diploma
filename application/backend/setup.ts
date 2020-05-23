import { sync, drop } from './database/';

import {
	createStudent,
	createAcademic,
} from './database/';


(async () => {
	await drop();
	await sync();

	// Create students
	await createStudent("Slavik", "Nychkalo", "slavik.nychkalo@gmail.com", "0970067238", "admin");

	// Create academics
	await createAcademic("Andrew", "Panandas", "andrew@gmail.com", "0995444743");
})()
	.then(res => res)
	.catch(err => console.log(err));
