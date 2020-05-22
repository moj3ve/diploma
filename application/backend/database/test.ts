import { Student, getStudents, createStudent } from './models/Student';
import { sync } from './utils';

beforeAll(async () => {
	await sync();
});

describe("Student", () => {
	it("get all Students", async () => {
		const students = await getStudents();
		expect(students.length).toBe(0);
	});

	it("create student", async () => {
		const student = await createStudent("Slavik", "Nychkalo", "", "");
		expect(student.firstName).toBe("Slavik");
		expect(student.lastName).toBe("Nychkalo");
		expect(student.email).toBe("");
		expect(student.phone).toBe("");
	});
})
