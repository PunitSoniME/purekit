/**
 * The unshift() method adds one or more elements to the beginning of an array.
 * @param array Array to perform unshift.
 * @param elements Elements to the beginning of an array.
 * @returns New mutated array.
 */
const unshift = <T>(array: T[], ...elements: any): T[] => {
	array.unshift(...elements.flat());
	return array;
};

export default unshift;
