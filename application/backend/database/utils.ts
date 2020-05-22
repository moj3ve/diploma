const { Sequelize, Model, DataTypes } = require('sequelize');

const createSequelize = () => {
	if (process.env.PRODUCTION) {
		return new Sequelize('database', 'username', 'password', {
			host: 'database',
			dialect: 'postgres',
			logging: false,
		});
	}
	return new Sequelize('sqlite::memory:', {
		logging: false
	});
}

export const sequelize = createSequelize();

export const sync = async () => {
	return await sequelize.sync();
}
