import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils';


export class Student extends Model {}


Student.init(
	{
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'student'
	}
);


export const createStudent = async (firstName, lastName, email, phone) => {
	const student = await Student.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		phone: phone,
	});
	return student;
}


export const getStudents = async () => {
	const students = await Student.findAll();
	return await students;
}
