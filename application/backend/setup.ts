import { sync, drop } from './database/';

import {
	Student,
	Academic,
} from './database/';


(async () => {
	await drop();
	await sync();

	// Create students
	await Student.create("Ярослав", "Володимирович", "Ничкало", "slavik.nychkalo@gmail.com", "0970067238", "test");

	// Create academics
	await Academic.create("Андрій", "Сергійович", "Парацитамол", "andrew@gmail.com", "0995444743");
})()
	.then(res => res)
	.catch(err => console.log(err));
