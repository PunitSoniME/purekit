import concat from './concat';

/**
 *
 * @param array
 * @param restArray
 * @returns
 */
const xor = <T>(array: T[], ...restArray: T[][]): T[] => {
	const flatArray = concat(array, ...restArray);
	const mappedData = new Map();

	for (const elem of flatArray) {
		mappedData.set(elem, mappedData.has(elem) ? mappedData.get(elem) + 1 : 1);
	}

	let difference: T[] = [];

	mappedData.forEach((value, key) => {
		if (value === 1) difference.push(key);
	});

	return difference;
};

export default xor;
