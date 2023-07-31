/**
 * Retrieves a map of groceries names and quantities.
 * @returns {Map(String, Number)}
 */

export default function groceriesList() {
	const values = [
		['Apples', 10],
		['Tomatoes', 10],
		['Pasta', 1],
		['Rice', 1],
		['Banana', 5],
	];
	return new Map(values);
}
