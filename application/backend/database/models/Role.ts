import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils';


export class Role extends Model {}


Role.init(
	{
		name: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'role'
	}
);
