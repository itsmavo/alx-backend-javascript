/**
 * Retrieves students in a given location
 * @param {
 * 	id: Number,
 * 	firstName: String,
 * 	location: String
 * 	} - The list of students
 * @param {String} city - location
 */

export default function getStudentsByLocation(students, city) {
	if (students instanceof Array) {
		return students.filter((student) => student.location === city);
	}
	return [];
}
