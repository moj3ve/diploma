import { IStudent } from './Student';

let id = 0;

export const createStudent = (): IStudent => ({
	id: ++id,
	firstName: "Ярослав",
	lastName: "Ничкало",
	phone: "0970067238",
	email: "slavik.nychkalo@gmail.com",
});

export const createStudents = (name) => ([
	createStudent(),
	createStudent(),
	createStudent(),
	createStudent(),
]);
