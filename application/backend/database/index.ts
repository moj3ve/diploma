import { sequelize } from './utils';
export * from './models/Student';
export * from './models/Group';
export * from './models/Role';
export * from './models/StudentGroup';
export * from './models/Academic';

export const sync = async () => {
	await sequelize.sync();
}

export const drop = async () => {
	await sequelize.drop();
}

export { sequelize };