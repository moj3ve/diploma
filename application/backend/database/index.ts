import { sequelize } from './utils';
export * as Student from './models/Student';
export * as Group from './models/Group';
export * as Role from './models/Role';
export * as StudentGroup from './models/StudentGroup';
export * as Academic from './models/Academic';

export const sync = async () => {
	await sequelize.sync();
}

export const drop = async () => {
	await sequelize.drop();
}

export { sequelize };