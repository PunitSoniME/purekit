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

	return Array.from(new Set([...mappedValues.values()]));
};
export default sortedUniqBy;
