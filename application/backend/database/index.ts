import { sequelize } from './utils';
export { Student, getStudents, createStudent } from './models/Student';
export { Academic, getAcademics, createAcademic } from './models/Academic';

export const sync = async () => {
	await sequelize.sync();
}

export const drop = async () => {
	await sequelize.drop();
}

export { sequelize };