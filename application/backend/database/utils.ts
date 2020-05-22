const { Sequelize, Model, DataTypes } = require('sequelize');

export const sequelize = new Sequelize('sqlite::memory:', {
	logging: false
});
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
// const sequelize = new Sequelize('database', 'username', 'password', {
// 	host: 'localhost',
// 	dialect: 'postgres',
// 	logging: false,
// });

export const sync = async () => {
	return await sequelize.sync();
}

// try {
// 	await sequelize.authenticate();
// 	console.log('Connection has been established successfully.');
// } catch (error) {
// 	console.error('Unable to connect to the database:', error);
// }
