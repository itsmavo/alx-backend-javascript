/**
 * Changes quantities of unique items to 100.
 * @param {Map(String, Number)} - map of grocery and quantity
 */
export default function updateUniqueItems(map) {
	if(!(map instanceof Map)) {
		throw new Error('Cannot process');
	}
	map.forEach((value, key) => {
		if (value === 1) {
			map.set(key, 100);
		}
	});
}
