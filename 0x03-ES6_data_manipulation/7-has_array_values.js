/**
 * Checks if a set contains each element in array.
 * @param {Set} set - collection of unique items.
 * @param {*} array - array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
	return array.every((value) => set.has(value));
}
