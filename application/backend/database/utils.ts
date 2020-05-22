import { Sequelize, Model, DataTypes } from 'sequelize';
import { DOCKER, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASS } from '../config';

const createSequelize = () => {
	if (DOCKER) {
		return new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASS, {
			host: POSTGRES_HOST,
			port: POSTGRES_PORT,
			dialect: 'postgres',
			logging: false,
		});
	}
	return new Sequelize('sqlite::memory:', {
		logging: false
	});
}

export const sequelize = createSequelize();
