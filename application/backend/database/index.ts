import { sequelize } from './utils';
export { Student, getStudents, createStudent } from './models/Student';
export { Academic, getAcademics, createAcademic } from './models/Academic';

export const sync = async () => {
	return await sequelize.sync();
}

export { sequelize };