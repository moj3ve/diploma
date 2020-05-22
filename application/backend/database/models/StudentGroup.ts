import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils';


export class StudentGroup extends Model {}


StudentGroup.init(
	{
		student_id: DataTypes.INTEGER,
		group_id: DataTypes.INTEGER,
		role_id: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'student_group'
	}
);
