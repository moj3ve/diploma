import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils';


export class Group extends Model {}


Group.init(
	{
		name: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'group'
	}
);
