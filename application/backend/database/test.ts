import { Student, getStudents } from './models/Student';
import { sync } from './utils';

beforeAll(async () => {
	await sync();
});

test("Student", async () => {
	const students = await getStudents();
	expect(students.length).toBe(0);
});
