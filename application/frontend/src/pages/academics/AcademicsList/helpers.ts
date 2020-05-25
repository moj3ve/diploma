import { IAcademic } from './Academic';

let id = 0;

export const createAcademic = (): IAcademic => ({
	id: ++id,
	firstName: "Ярослав",
	lastName: "Ничкало",
	phone: "0970067238",
	email: "slavik.nychkalo@gmail.com",
});

export const createAcademics = (name) => ([
	createAcademic(),
	createAcademic(),
	createAcademic(),
	createAcademic(),
]);
