import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils';


export class Student extends Model {}


Student.init(
	{
		firstName: DataTypes.STRING,
		middleName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
		password: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'student'
	}
);


export const create = async (firstName, middleName, lastName, email, phone, password) => {
	const student = await Student.create({
		firstName: firstName,
		middleName: middleName,
		lastName: lastName,
		email: email,
		phone: phone,
		password: password,
	});
	return student;
}


export const getAll = async () => {
	const students = await Student.findAll();
	return await students;
}
