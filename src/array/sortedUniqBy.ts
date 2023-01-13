/**
 *
 * @param array
 * @param iteratee
 * @returns
 */
const sortedUniqBy = <T>(array: T[], iteratee: Function): T[] => {
	let mappedValues = new Map();

	array.forEach(element => {
		const updatedElement = iteratee(element);
		if (updatedElement && !mappedValues.has(updatedElement)) {
			mappedValues.set(updatedElement, element);
		}
	});

	array = Array.from(new Set([...mappedValues.values()]));
	return array;
};
export default sortedUniqBy;
