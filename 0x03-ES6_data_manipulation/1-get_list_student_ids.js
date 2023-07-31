/**
 * Retrieves ids from a list of students.
 * @params{
 *	id: Number,
 *	firstName: String,
 *	location: String
 * }
 */

export default function getListStudentIds(students) {
	if (students instanceof Array) {
		return students.map((student) => student.id);
	}
	return [];
}
