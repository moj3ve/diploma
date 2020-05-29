import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils';


export class Academic extends Model {}


Academic.init(
	{
		firstName: DataTypes.STRING,
		middleName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'academic'
	}
);


export const create = async (firstName, middleName, lastName, email, phone) => {
	const academic = await Academic.create({
		firstName: firstName,
		middleName: middleName,
		lastName: lastName,
		email: email,
		phone: phone,
	});
	return academic;
}


export const getAll = async () => {
	const academics = await Academic.findAll();
	return await academics;
}
